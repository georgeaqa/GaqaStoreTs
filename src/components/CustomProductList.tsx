import { Pressable, Image, View } from "react-native";
import CustomText from "./CustomText";
import { DIMENSIONS } from "@/src/constants";
import React from "react";

type CustomProductListProps = {
  item: any;
  onPress: () => void;
  disabled: boolean;
};
export default function CustomProductList({
  item,
  onPress,
  disabled,
}: Required<CustomProductListProps>) {
  return (
    <View
      className="items-center justify-center m-1 border-2 rounded-3xl bg-black py-10"
      style={{ width: (DIMENSIONS.width - 16) / 2 }}
    >
      <Pressable
        onPress={onPress}
        className="bg-white active:opacity-20"
        disabled={disabled}
      >
        <Image
          source={{ uri: item.characterImage }}
          className="w-full aspect-[4/3]"
          resizeMode="contain"
        />

        <CustomText className="text-center text-2xl color-primary">
          {item.characterName}
        </CustomText>
      </Pressable>
      {disabled ? (
        <CustomText className="text-center text-4xl color-gold absolute">
          Agregado al carrito
        </CustomText>
      ) : null}
    </View>
  );
}
