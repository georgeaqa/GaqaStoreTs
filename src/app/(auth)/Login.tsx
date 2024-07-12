import { Image, View } from "react-native";
import { CustomButton, CustomInput } from "@/src/components";
import { router } from "expo-router";
import React from "react";

export default function LoginScreen() {
  return (
    <View className="flex-1 items-center justify-center gap-3 p-1 bg-white">
      <Image
        source={require("../../assets/images/gaqa-high-resolution-logo-transparent.png")}
        resizeMode="contain"
        className="w-full max-w-[300px] h-full max-h-[300px]"
      />
      <CustomInput placeholder="Usuario" />
      <CustomInput placeholder="Contraseña" />
      <CustomButton onPress={() => router.push("Products")}>
        Iniciar Sesión
      </CustomButton>
      <CustomButton onPress={() => router.push("Register")}>
        Registrarse
      </CustomButton>
      <CustomButton onPress={() => router.push("ForgotPassword")}>
        Recuperar Contraseña
      </CustomButton>
    </View>
  );
}
