import { View, Image, Pressable } from "react-native";
import CustomText from "./CustomText";
import CustomButton from "./CustomButton";
import CustomIcon, { Icons } from "./CustomIcon";
import { DIMENSIONS } from "@/src/constants";
import React from "react";

type CustomCartDetailProps = {
  item: any;
};

export default function CustomCartDetail({ item }: CustomCartDetailProps) {
  return (
    <View
      className="items-center justify-center p-1 m-1 border-2 rounded-3xl"
      style={{ width: (DIMENSIONS.width - 16) / 2 }}
    >
      <Image
        source={{ uri: item.characterImage }}
        className="w-full aspect-[4/3]"
        resizeMode="contain"
      />
      <View className="gap-2 items-center">
        <CustomText className="color-primary">{item.characterName}</CustomText>
        <CustomText className="color-primary">
          {"Precio: S/ " + item.characterPrice}
        </CustomText>
        <View className="flex-row gap-2">
          <Pressable>
            <CustomIcon
              name="pluscircleo"
              type={Icons.AntDesign}
              color="#00FF00"
            />
          </Pressable>
          <CustomText className="color-primary">{item.quantity}</CustomText>
          <Pressable>
            <CustomIcon
              name="minuscircleo"
              type={Icons.AntDesign}
              color="#FF0000"
            />
          </Pressable>
        </View>
      </View>
      <Pressable>
        <CustomIcon name="delete" type={Icons.AntDesign} color="#FF0000" />
      </Pressable>
    </View>
  );
}
