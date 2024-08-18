import { Pressable, Image, View } from "react-native";
import CustomText from "./CustomText";
import { DIMENSIONS } from "@/src/constants";
import CustomIcon, { Icons } from "./CustomIcon";
import {
  removeFromCart,
  incrementCartCharacterQuantity,
  decrementCartCharacterQuantity,
} from "@/src/store/actions/cart.action";
import { useDispatch } from "react-redux";
import React from "react";

type CustomProductListProps = {
  item: any;
  onPress: () => void;
  disabled: boolean;
  mode: "cart" | "list" | "order";
};
export default function CustomProductList({
  item,
  onPress,
  disabled,
  mode,
}: Required<CustomProductListProps>) {
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
      className="items-center justify-center m-1 border-2 rounded-3xl bg-black"
      style={{ width: (DIMENSIONS.width - 16) / 2 }}
    >
      <Pressable
        onPress={onPress}
        className="bg-white active:opacity-20 gap-2 p-1"
        disabled={disabled}
      >
        <Image
          source={{ uri: item.characterImage }}
          className="w-full aspect-[4/3]"
          resizeMode="contain"
        />
        <View className="items-center">
          <CustomText className="text-center text-2xl color-primary">
            {item.characterName}
          </CustomText>
          { mode === "order" ? (
            <>
              <CustomText className="color-primary">
                {"Cantidad: " + item.quantity}
              </CustomText>
              <CustomText className="color-primary">
                {"Precio: S/ " + item.characterPrice.toFixed(2)}
              </CustomText>
              <CustomText className="color-primary">
                {"Precio Total: S/ " +
                  (item.quantity * item.characterPrice).toFixed(2)}
              </CustomText>
            </>
          ) : null}
          {mode === "cart" ? (
            <>
              <CustomText className="color-primary">
                {"Precio: S/ " + item.characterPrice.toFixed(2)}
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
                <CustomText className="color-primary">
                  {item.quantity}
                </CustomText>
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
              <CustomText className="color-primary">
                {"Precio Total: S/ " +
                  (item.quantity * item.characterPrice).toFixed(2)}
              </CustomText>
            </>
          ) : null}
        </View>
      </Pressable>
      {disabled && mode === "list" ? (
        <CustomText className="text-center text-4xl color-gold absolute">
          Agregado al carrito
        </CustomText>
      ) : null}
    </View>
  );
}
