import { Text, TextProps } from "react-native";
import React from "react";

type CustomTextProps = TextProps & {
  className: string;
};

export default function CustomText({
  className,
  children,
}: Partial<CustomTextProps>) {
  return <Text className={`font-Agbalumo ${className}`}>{children}</Text>;
}
