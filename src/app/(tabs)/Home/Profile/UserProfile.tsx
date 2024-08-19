import { View, Image, ActivityIndicator } from "react-native";
import { useAuth } from "@/src/providers/Authprovider";
import { CustomText, CustomButton } from "@/src/components";
import { Stack, router } from "expo-router";
import { get_profile } from "@/src/lib/profileSupabase";
import { get_avatar_url } from "@/src/lib/avatarSupabase";
import React, { useEffect, useState } from "react";

interface ProfileProps {
  id: string;
  username: string;
  full_name: string;
  avatar_url: string;
}

export default function UserProfileScreen() {
  const { user } = useAuth();
  const [profile, setProfile] = useState<ProfileProps | null>(null);
  const [url, setUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchProfile() {
      try {
        const data = await get_profile({ user_id: user?.id });
        setProfile(data[0]);
      } catch (error: any) {
        console.error("Error fetching profile:", error.message);
      } finally {
        setIsLoading(false);
      }
    }

    async function fetchAvatarUrl() {
      let avatar_url: string | any = profile?.avatar_url;
      if (!avatar_url) {
        avatar_url = "logo.png";
      }
      const { signedUrl } = await get_avatar_url({ avatar_url });
      setUrl(signedUrl);
    }

    fetchProfile();
    fetchAvatarUrl();
  }, [profile?.avatar_url]);

  return (
    <View className="flex-1 items-center justify-center bg-white p-1">
      <Stack.Screen options={{ title: "Perfil" }} />
      {isLoading ? (
        <ActivityIndicator size="large" className="color-primary" />
      ) : (
        url && (
          <View className="flex-1 w-full gap-2">
            <Image
              source={{ uri: url }}
              className="w-full aspect-square"
              resizeMode="contain"
            />
            <CustomText>ID: {profile?.id}</CustomText>
            <CustomText>Correo electronico: {user?.email}</CustomText>
            <CustomText>Username: {profile?.username}</CustomText>
            <CustomText>Nombre completo: {profile?.full_name}</CustomText>
            <CustomButton
              onPress={() => router.push("/Home/Profile/EditProfile")}
            >
              Editar perfil
            </CustomButton>
          </View>
        )
      )}
    </View>
  );
}
