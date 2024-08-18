import { View, Image, ActivityIndicator } from "react-native";
import { useAuth } from "@/src/providers/Authprovider";
import { CustomText } from "@/src/components";
import { Stack } from "expo-router";
import { supabase } from "@/src/lib/supabase";
import { get_profile } from "@/src/lib/profileSupabase";
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
      if (profile?.avatar_url) {
        const { data } = await supabase.storage
          .from("avatars")
          .createSignedUrl(profile?.avatar_url as string, 3600);

        setUrl(data?.signedUrl as string);
      } else {
        const { data } = await supabase.storage
          .from("avatars")
          .createSignedUrl("logo.png", 3600);

        setUrl(data?.signedUrl as string);
      }
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
            <Image source={{ uri: url }} className="w-full aspect-square" />
            <CustomText className="">ID: {profile?.id}</CustomText>
            <CustomText className="">
              Correo electronico: {user?.email}
            </CustomText>
            <CustomText className="">Username: {profile?.username}</CustomText>
            <CustomText className=" ">
              Nombre completo: {profile?.full_name}
            </CustomText>
          </View>
        )
      )}
    </View>
  );
}
