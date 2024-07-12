import { View } from "react-native";
import { CustomButton, CustomInput } from "@/src/components";
import React from "react";

export default function RegisterScreen() {
  return (
    <View className="flex-1 items-center gap-3 p-1 bg-white">
      <CustomInput placeholder="Nombre" />
      <CustomInput placeholder="Email" />
      <CustomInput placeholder="Contraseña" />
      <CustomInput placeholder="Repetir Contraseña" />
      <CustomButton>Registrarse</CustomButton>
    </View>
  );
}
