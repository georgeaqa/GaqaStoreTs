import { Pressable, Image, View } from "react-native";
import CustomText from "./CustomText";
import { DIMENSIONS } from "@/src/constants";
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
    <View
      className="items-center justify-center p-1 m-1 border-2 rounded-3xl"
      style={{ width: (DIMENSIONS.width - 16) / 2 }}
    >
      <Pressable onPress={onPress}>
        <Image
          source={{ uri: item.characterImage }}
          className="w-full aspect-[4/3]"
          resizeMode="contain"
        />
        <CustomText className="text-center text-2xl color-primary">
          {item.characterName}
        </CustomText>
      </Pressable>
    </View>
  );
}
