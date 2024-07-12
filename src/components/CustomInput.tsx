import { TextInput } from "react-native";
import React from "react";

type CustomInputProps = {
  placeholder?: string;
};

export default function CustomInput({ placeholder }: CustomInputProps) {
  return (
    <TextInput
      placeholder={placeholder}
      className="border-2 rounded-lg w-full p-2 focus:border-primary font-Agbalumo"
    />
  );
}
