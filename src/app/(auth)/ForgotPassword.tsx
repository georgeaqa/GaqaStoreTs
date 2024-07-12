import { View } from "react-native";
import { CustomButton, CustomInput } from "@/src/components";
import React from "react";

export default function ForgotPasswordScreen() {
  return (
    <View className="flex-1 items-center gap-3 p-1 bg-white">
      <CustomInput placeholder="Correo Electrónico" />
      <CustomButton>Enviar Instrucciones</CustomButton>
    </View>
  );
}
