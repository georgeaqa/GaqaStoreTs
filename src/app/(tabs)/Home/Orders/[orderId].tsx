import { View, FlatList, ActivityIndicator, ScrollView } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { CustomProductList, CustomText } from "@/src/components";
import { get_order_detail } from "@/src/lib/orderSupabase";
import React, { useEffect, useState } from "react";

export default function OrderDetailScreen() {
  const { orderId } = useLocalSearchParams();
  const [orderDetail, setOrderDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchOrderDetail() {
      try {
        const orderDetailData: any = await get_order_detail({
          order_id: orderId as string,
        });
        const parsedOrderDetail = orderDetailData[0].order_detail.map(
          (item: any) => JSON.parse(item)
        );
        setOrderDetail(parsedOrderDetail);
      } catch (error: any) {
        console.error("Error fetching order detail:", error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchOrderDetail();
  }, []);

  const renderItemOrderDetail = ({ item }: any) => {
    return (
      <CustomProductList
        item={item}
        mode="order"
        onPress={() => ({})}
        disabled={true}
      />
    );
  };

  const sumTotal = (cartCharacters: any[]) => {
    return cartCharacters
      .map((character: any) => character.characterPrice * character.quantity)
      .reduce((a, b) => a + b, 0);
  };

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Stack.Screen
        options={{
          title: "Detalle del pedido: ",
          headerTitleStyle: { fontFamily: "Agbalumo", color: "#FF0000" },
        }}
      />
      {isLoading ? (
        <ActivityIndicator size="large" className="color-primary" />
      ) : (
        <ScrollView
          className="w-full"
          contentContainerStyle={{ gap: 10 }}
          showsVerticalScrollIndicator={false}
        >
          <CustomText className="text-center color-primary">
            {orderId}
          </CustomText>
          <CustomText className="text-center color-primary ">
            Precio total del pedido: S/{sumTotal(orderDetail).toFixed(2)}
          </CustomText>
          <FlatList
            data={orderDetail}
            renderItem={renderItemOrderDetail}
            keyExtractor={(item: any) => item.characterId}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            scrollEnabled={false}
          />
        </ScrollView>
      )}
    </View>
  );
}
