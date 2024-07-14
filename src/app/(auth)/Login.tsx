import { Image, View } from "react-native";
import { CustomButton, CustomInput } from "@/src/components";
import { router } from "expo-router";
import { useForm } from "react-hook-form";
import { EMAIL_REGEX } from "@/src/constants";
import React from "react";

export default function LoginScreen() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <View className="flex-1 items-center justify-center gap-3 p-1 bg-white">
      <Image
        source={require("../../assets/images/gaqa-high-resolution-logo-transparent.png")}
        resizeMode="contain"
        className="w-full max-w-[300px] h-full max-h-[300px]"
      />
      <CustomInput
        name="email"
        control={control}
        rules={{
          required: "Este campo es requerido",
          pattern: {
            value: EMAIL_REGEX.email_regex,
            message: "Formato de correo incorrecto",
          },
        }}
        placeholder="Correo electronico"
      />
      <CustomInput
        name="password"
        control={control}
        rules={{
          required: "Este campo es requerido",
        }}
        secureTextEntry={true}
        placeholder="Contraseña"
      />
      <CustomButton onPress={handleSubmit(onSubmit)}>
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
