import { View, FlatList, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Stack } from "expo-router";
import {
  CustomButton,
  CustomText,
  CustomProductList,
  CustomModal,
} from "@/src/components";
import { useAuth } from "@/src/providers/Authprovider";
import { save_order } from "@/src/lib/orderSupabase";
import { clearCart } from "@/src/store/actions/cart.action";
import React, { useState } from "react";
export default function ShoppingCartScreen() {
  const cartCharacters = useSelector((state: any) => state.cart.cartCharacters);
  const total = useSelector((state: any) => state.cart.total);
  const dispatch = useDispatch();
  const { user } = useAuth();
  const [showModal, setShowModal] = useState(false);

  const renderItemCartDetail = ({ item }: any) => {
    return (
      <CustomProductList
        onPress={() => {}}
        item={item}
        disabled={true}
        mode="cart"
      />
    );
  };
  const onPressOk = async () => {
    try {
      await save_order({
        user_id: user?.id as string,
        order_detail: cartCharacters as string[],
        order_total: total as number,
      });
    } catch (error: any) {
      setShowModal(true);
    }
    dispatch(clearCart());
    setShowModal(!showModal);
  };
  const onPressNo = () => {
    setShowModal(!showModal);
  };

  return (
    <View className="flex-1 items-center bg-white justify-between">
      <Stack.Screen options={{ title: "Carrito de compras" }} />
      {cartCharacters.length > 0 ? (
        <ScrollView className="w-full">
          <FlatList
            data={cartCharacters}
            renderItem={renderItemCartDetail}
            keyExtractor={(item: any) => item.characterId}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            scrollEnabled={false}
          />
        </ScrollView>
      ) : (
        <View className="flex-1 items-center justify-center">
          <CustomText className="text-primary">
            No tienes productos en tu carrito.
          </CustomText>
        </View>
      )}
      <CustomButton
        classNameButton="bg-primary"
        title={`Precio total del pedido: S/${total.toFixed(2)}`}
        classNameTitle="text-white"
        onPress={() => setShowModal(true)}
      />

      {cartCharacters.length === 0 ? (
        <CustomModal
          visible={showModal}
          modalMessage="¡No tienes productos en tu carrito!"
          onPressCloseModal={() => setShowModal(!showModal)}
        />
      ) : (
        <CustomModal
          visible={showModal}
          onPressOk={onPressOk}
          onPressNo={onPressNo}
          modalMessage="¿Desea confirmar la compra?"
        />
      )}
    </View>
  );
}
