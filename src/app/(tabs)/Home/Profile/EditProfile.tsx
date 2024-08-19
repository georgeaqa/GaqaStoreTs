import { View, Image, Pressable } from "react-native";
import { Stack, router } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import React, { useState, useEffect } from "react";
import { supabase } from "@/src/lib/supabase";
import { useAuth } from "@/src/providers/Authprovider";
import { CustomButton } from "@/src/components";

export default function EditProfileScreen() {
  const { user } = useAuth();
  const [image, setImage] = useState<any>(null);

  async function uploadAvatar() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: false,
      allowsEditing: true,
      quality: 1,
      exif: false,
    });

    if (result.canceled || !result.assets || result.assets.length === 0) {
      console.log("User cancelled image picker.");
      return;
    }

    const imageAsset = result.assets[0];

    const arraybuffer = await fetch(imageAsset.uri).then((res) =>
      res.arrayBuffer()
    );

    const { error: uploadError } = await supabase.storage
      .from("avatars")
      .upload(user?.id as string, arraybuffer, {
        contentType: imageAsset.mimeType ?? "image/jpeg",
      });
    if (uploadError) {
      await supabase.storage
        .from("avatars")
        .update(user?.id as string, arraybuffer, {
          upsert: true,
          contentType: imageAsset.mimeType ?? "image/jpeg",
        });
    }
    setImage(imageAsset);
    router.push("/Home/Profile/UserProfile");
  }

  return (
    <View className="flex-1 items-center bg-white p-1">
      <Stack.Screen options={{ title: "Editar perfil" }} />

      <Pressable
        onPress={uploadAvatar}
        className="w-full aspect-square bg-black"
      >
        {image && (
          <Image
            source={{ uri: image.uri }}
            className="w-full h-full"
            resizeMode="contain"
          />
        )}
      </Pressable>
    </View>
  );
}
