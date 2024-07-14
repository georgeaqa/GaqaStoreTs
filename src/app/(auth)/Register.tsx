import { View } from "react-native";
import { CustomButton, CustomInput } from "@/src/components";
import { useForm } from "react-hook-form";
import { EMAIL_REGEX } from "@/src/constants";
import React from "react";

export default function RegisterScreen() {
  const { control, handleSubmit, watch } = useForm();
  const pwd = watch("password");
  const handleSignUpWithPassword = (data: any) => {
    console.log(data);
  };

  return (
    <View className="flex-1 items-center gap-3 p-1 bg-white">
      <CustomInput name="nickname" control={control} placeholder="Nickname" />
      <CustomInput name="name" control={control} placeholder="Nombres" />
      <CustomInput name="surname" control={control} placeholder="Apellidos" />
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
      <CustomInput
        name="passwordConfirmation"
        control={control}
        rules={{
          validate: (value: string) =>
            value === pwd || "las contraseñas no coinciden",
        }}
        secureTextEntry={true}
        placeholder="Repetir Contraseña"
      />
      <CustomButton onPress={handleSubmit(handleSignUpWithPassword)}>
        Registrarse
      </CustomButton>
    </View>
  );
}
