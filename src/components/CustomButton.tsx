import { Pressable, Text } from "react-native";
import CustomText from "./CustomText";
import React from "react";

type CustomButtonProps = {
  onPress?: () => void;
  children?: React.ReactNode;
};

export default function CustomButton({ onPress, children }: CustomButtonProps) {
  return (
    <Pressable onPress={onPress} className="w-full rounded-full bg-primary p-2">
      <CustomText className="text-white text-center">{children}</CustomText>
    </Pressable>
  );
}
