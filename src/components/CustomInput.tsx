import { TextInput, TextInputProps } from "react-native";
import { Controller } from "react-hook-form";
import CustomText from "./CustomText";
import React from "react";

type CustomInputProps = {
  control?: any;
  name: string;
  rules?: any;
  placeholder: string;
  secureTextEntry?: boolean;
};

export default function CustomInput({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry = false,
}: CustomInputProps) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <>
          <TextInput
            placeholder={placeholder}
            className="border-2 rounded-lg w-full p-2 focus:border-primary font-Agbalumo"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            secureTextEntry={secureTextEntry}
          />
          {error && (
            <CustomText className="text-primary">{error.message}</CustomText>
          )}
        </>
      )}
    />
  );
}
