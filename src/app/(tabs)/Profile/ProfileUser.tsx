import { CustomText, CustomButton } from "@/src/components";
import { useAuth } from "@/src/providers/Authprovider";
import { View } from "react-native";
import { log_out } from "@/src/lib/authSupabase";
import React from "react";

export default function ProfileUser() {
  const { user } = useAuth();
  return (
    <View>
      <CustomText>{user?.id}</CustomText>
      <CustomButton onPress={log_out}>Cerrar Sesión</CustomButton>
    </View>
  );
}
