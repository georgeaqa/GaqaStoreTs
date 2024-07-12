import { Pressable, Image } from "react-native";
import CustomText from "./CustomText";
import React from "react";

type CustomProductListProps = {
  item: any;
  onPress?: () => void;
};
export default function CustomProductList({
  item,
  onPress,
}: CustomProductListProps) {
  return (
    <Pressable className=" w-[50%] p-2 border-primary shadow" onPress={onPress}>
      <Image
        source={{ uri: item.characterImage }}
        className="w-full h-[200px]"
        resizeMode="contain"
      />
      <CustomText className="text-center text-2xl color-primary">
        {item.characterName}
      </CustomText>
    </Pressable>
  );
}
