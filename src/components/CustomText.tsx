import { Text } from "react-native";
import React from "react";

type CustomTextProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function CustomText({ className, children }: CustomTextProps) {
  return <Text className={`font-Agbalumo ${className}`}>{children}</Text>;
}
