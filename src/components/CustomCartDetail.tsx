import { View, Image, Pressable } from "react-native";
import CustomText from "./CustomText";
import CustomIcon, { Icons } from "./CustomIcon";
import { DIMENSIONS } from "@/src/constants";
import {
  removeFromCart,
  incrementCartCharacterQuantity,
  decrementCartCharacterQuantity,
} from "@/src/store/actions/cart.action";
import { useDispatch } from "react-redux";
import React from "react";

type CustomCartDetailProps = {
  item: any;
};

export default function CustomCartDetail({ item }: CustomCartDetailProps) {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item));
  };

  const handleIncrementQuantity = () => {
    dispatch(incrementCartCharacterQuantity(item));
  };

  const handleDecrementQuantity = () => {
    dispatch(decrementCartCharacterQuantity(item));
  };

  return (
    <View
      className="items-center justify-center py-10 m-1 border-2 rounded-3xl bg-black"
      style={{ width: (DIMENSIONS.width - 16) / 2 }}
    >
      <View className="bg-white gap-2 p-1">
        <Image
          source={{ uri: item.characterImage }}
          className="w-full aspect-[4/3]"
          resizeMode="contain"
        />
        <View className="items-center">
          <CustomText className="color-primary text-2xl">
            {item.characterName}
          </CustomText>
          <CustomText className="color-primary">
            {"Precio: S/ " + item.characterPrice + ".00"}
          </CustomText>
          <View className="flex-row gap-2 items-center">
            <Pressable
              onPress={() => handleIncrementQuantity()}
              className="active:opacity-20"
            >
              <CustomIcon
                name="pluscircleo"
                type={Icons.AntDesign}
                color="#00FF00"
              />
            </Pressable>
            <CustomText className="color-primary">{item.quantity}</CustomText>
            <Pressable
              onPress={() => handleDecrementQuantity()}
              className="active:opacity-20"
            >
              <CustomIcon
                name="minuscircleo"
                type={Icons.AntDesign}
                color="#FF0000"
              />
            </Pressable>
            <Pressable
              onPress={() => handleRemoveFromCart()}
              className="active:opacity-20"
            >
              <CustomIcon
                name="delete"
                type={Icons.AntDesign}
                color="#FF0000"
              />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
