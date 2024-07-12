import { Pressable, Text } from "react-native";
import React from "react";

type CustomButtonProps = {
  onPress?: () => void;
  children?: React.ReactNode;
};

export default function CustomButton({ onPress, children }: CustomButtonProps) {
  return (
    <Pressable onPress={onPress} className="w-full rounded-full bg-primary p-2">
      <Text className="text-white text-center font-Agbalumo">{children}</Text>
    </Pressable>
  );
}
