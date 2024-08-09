import { Pressable } from "react-native";
import CustomText from "./CustomText";
import React, { ReactNode } from "react";

type CustomButtonProps = {
  onPress: () => void;
  children: ReactNode;
};

export default function CustomButton({
  onPress,
  children,
}: Partial<CustomButtonProps>) {
  return (
    <Pressable
      onPress={onPress}
      className="w-full rounded-full bg-primary p-2 border-2 active:opacity-20"
    >
      <CustomText className="text-center text-white">{children}</CustomText>
    </Pressable>
  );
}
