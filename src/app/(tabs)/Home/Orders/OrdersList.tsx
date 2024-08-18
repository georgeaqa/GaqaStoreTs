import { View, FlatList, ActivityIndicator } from "react-native";
import { Stack,router } from "expo-router";
import { get_orders } from "@/src/lib/orderSupabase";
import { useAuth } from "@/src/providers/Authprovider";
import { CustomOrdersList, CustomText } from "@/src/components";
import React, { useEffect, useState } from "react";

export default function OrdersScreen() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const ordersData: any = await get_orders({ user_id: user?.id });
        setOrders(ordersData);
      } catch (error: any) {
        console.error("Error fetching orders:", error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchOrders();
  }, [orders]);

  const renderItemOrder = ({ item }: any) => {
    return <CustomOrdersList item={item} onPress={() => router.push(`/Home/Orders/${item.id}`)} />;
  };

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Stack.Screen options={{ title: "Pedidos realizados" }} />
      {isLoading ? (
        <ActivityIndicator size="large" className="color-primary" />
      ) : orders.length === 0 ? (
        <CustomText className="text-primary">
          No se encontraron resultados.
        </CustomText>
      ) : (
        <FlatList
          data={orders}
          renderItem={renderItemOrder}
          keyExtractor={(item: any) => item.id}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}
