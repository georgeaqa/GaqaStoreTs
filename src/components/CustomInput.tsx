import { TextInput, TextInputProps, View } from "react-native";
import { Controller, ControllerProps } from "react-hook-form";
import CustomText from "./CustomText";
import React from "react";

type CustomInputProps = TextInputProps &
  ControllerProps & {
    name: any;
  };

export default function CustomInput({
  control,
  name,
  rules = {},
  placeholder,
  ...props
}: Partial<CustomInputProps>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <View className="w-full">
          <TextInput
            placeholder={placeholder}
            className="border-2 rounded-lg w-full p-2 focus:border-primary font-Agbalumo bg-white"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            {...props}
          />
          {error && (
            <CustomText className="text-primary">{error.message}</CustomText>
          )}
        </View>
      )}
    />
  );
}
