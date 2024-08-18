import { View, Image } from "react-native";
import { useAuth } from "@/src/providers/Authprovider";
import { CustomText } from "@/src/components";
import { Stack } from "expo-router";
import { supabase } from "@/src/lib/supabase";
import { get_profile } from "@/src/lib/profileSupabase";
import React, { useEffect, useState } from "react";

interface ProfileProps {
  avatar_url: string;
}

export default function UserProfileScreen() {
  const { user } = useAuth();
  const [profile, setProfile] = useState<ProfileProps | null>(null);
  const [data, setData] = useState("");
  useEffect(() => {
    const fetchProfile = async () => {
      const data = await get_profile({ user_id: user?.id });
      setProfile(data[0]);
    };

    const fetchAvatarUrl = async () => {
      const { data } = supabase.storage
        .from("avatars")
        .getPublicUrl(profile?.avatar_url as string);

      setData(data.publicUrl);
    };

    fetchProfile();
    fetchAvatarUrl();
  }, [profile?.avatar_url, user?.id]);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Stack.Screen options={{ title: "Perfil" }} />
      {data ? (
        <Image source={{ uri: data }} className="w-20 h-20 rounded-full" />
      ) : null}
      <CustomText className="text-center color-primary">{user?.id}</CustomText>
    </View>
  );
}
