import { View, FlatList, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Stack } from "expo-router";
import { CustomButton } from "@/src/components";

import React from "react";
export default function ShoppingCartScreen() {
  const cartCharacters = useSelector((state: any) => state.cart.cartCharacters);
  const total = useSelector((state: any) => state.cart.total);

  return (
    <View className="flex-1 items-center gap-3 p-1">
      <Text>total: {total}</Text>
    </View>
  );
}
