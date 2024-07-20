import { Text } from "react-native";
import React, { ReactNode } from "react";

type CustomTextProps = {
  className?: string;
  children?: ReactNode;
};

export default function CustomText({ className, children }: CustomTextProps) {
  return <Text className={`font-Agbalumo ${className}`}>{children}</Text>;
}
