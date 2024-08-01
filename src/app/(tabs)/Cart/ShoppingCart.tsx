import { View, FlatList, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Stack } from "expo-router";
import { CustomButton } from "@/src/components";
import { CustomCartDetail } from "@/src/components";

import React from "react";
export default function ShoppingCartScreen() {
  const cartCharacters = useSelector((state: any) => state.cart.cartCharacters);
  const total = useSelector((state: any) => state.cart.total);

  const renderItemCartDetail = ({ item }: any) => {
    return <CustomCartDetail item={item} />;
  };

  return (
    <View className="flex-1 items-center gap-3 bg-white">
      <Stack.Screen options={{ title: "Carrito de compras" }} />
      <FlatList
        data={cartCharacters}
        renderItem={renderItemCartDetail}
        keyExtractor={(item: any) => item.characterId}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        numColumns={2}
      />
      <Text>total: {total}</Text>
    </View>
  );
}
