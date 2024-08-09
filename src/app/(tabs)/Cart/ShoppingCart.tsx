import { View, FlatList, Text, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Stack } from "expo-router";
import { CustomButton, CustomText } from "@/src/components";
import { CustomCartDetail } from "@/src/components";

import React from "react";
export default function ShoppingCartScreen() {
  const cartCharacters = useSelector((state: any) => state.cart.cartCharacters);
  const total = useSelector((state: any) => state.cart.total);

  const renderItemCartDetail = ({ item }: any) => {
    return <CustomCartDetail item={item} />;
  };

  return (
    <View className="flex-1 items-center bg-white justify-between">
      <Stack.Screen options={{ title: "Carrito de compras" }} />
      {cartCharacters.length > 0 ? (
        <FlatList
          data={cartCharacters}
          renderItem={renderItemCartDetail}
          keyExtractor={(item: any) => item.characterId}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      ) : (
        <View className="flex-1 items-center justify-center">
          <CustomText className="text-primary">
            No tienes productos en tu carrito.
          </CustomText>
        </View>
      )}
      <CustomButton>Precio total: S/{total}.00</CustomButton>
    </View>
  );
}
