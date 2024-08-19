import { Pressable, PressableProps } from "react-native";
import CustomText from "./CustomText";
import React from "react";

type CustomButtonProps = PressableProps & {
  classNameButton: string;
  title: string;
  classNameTitle: string;
};

export default function CustomButton({
  onPress,
  title,
  classNameButton,
  classNameTitle,
  ...props
}: Partial<CustomButtonProps>) {
  return (
    <Pressable
      onPress={onPress}
      className={`w-full rounded-full justify-center items-center p-2 gap-2 active:opacity-20 ${classNameButton}`}
      {...props}
    >
      <CustomText className={`text-center ${classNameTitle}`}>
        {title}
      </CustomText>
    </Pressable>
  );
}
