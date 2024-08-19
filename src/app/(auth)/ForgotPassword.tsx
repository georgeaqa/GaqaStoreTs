import { View } from "react-native";
import { CustomButton, CustomInput } from "@/src/components";
import { EMAIL_REGEX } from "@/src/constants";
import { useForm } from "react-hook-form";
import React from "react";

export default function ForgotPasswordScreen() {
  const { control } = useForm();
  return (
    <View className="flex-1 items-center gap-3 p-1 bg-white">
      <CustomInput
        name="email"
        control={control}
        rules={{
          required: "Este campo es requerido.",
          pattern: {
            value: EMAIL_REGEX.email_regex,
            message: "Formato de correo incorrecto.",
          },
        }}
        placeholder="Correo electronico"
      />
      <CustomButton
        classNameButton="bg-primary"
        title="Enviar"
        classNameTitle="text-white"
      />
    </View>
  );
}
