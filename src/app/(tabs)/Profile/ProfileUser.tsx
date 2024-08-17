import { CustomText, CustomButton } from "@/src/components";
import { useAuth } from "@/src/providers/Authprovider";
import { View } from "react-native";
import { log_out } from "@/src/lib/authSupabase";
import { useDispatch } from "react-redux";
import { clearCart } from "@/src/store/actions/cart.action";
import { Stack } from "expo-router";
import React from "react";

export default function ProfileUser() {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(clearCart());
    log_out();
  };

  return (
    <View className="flex-1 items-center justify-center p-1 bg-white">
      <Stack.Screen options={{ title: "Perfil" }} />
      <CustomText>{user?.id}</CustomText>
      <CustomText>{user?.email}</CustomText>
      <CustomButton onPress={handleLogOut}>Cerrar Sesión</CustomButton>
    </View>
  );
}
