import { View, Pressable } from "react-native";
import CustomText from "./CustomText";
import CustomIcon, { Icons } from "./CustomIcon";
import moment from "moment";
import "moment/locale/es";
import "moment-timezone";
import React from "react";

const formatDate = (dateString: string) => {
  const userTimeZone = moment.tz.guess();
  const formattedDate = moment
    .tz(dateString, userTimeZone)
    .locale("es")
    .format("DD MMMM YYYY, HH:mm");
  return formattedDate;
};

type CustomOrdersListProps = {
  item: any;
  onPress: () => void;
};

export default function CustomOrdersList({
  item,
  onPress,
}: Partial<CustomOrdersListProps>) {
  return (
    <View className="m-1 p-1 bg-white">
      <Pressable
        onPress={onPress}
        className="w-full flex-row items-center border-b-2 active:opacity-20"
      >
        <View>
          <CustomText>{"Pedido: " + item.id}</CustomText>
          <CustomText>
            {"Fecha de compra: " + formatDate(item.created_at)}
          </CustomText>
          <CustomText className="text-primary">
            {"Total: S/" + item.order_total + ".00"}
          </CustomText>
        </View>
        <CustomIcon
          name="navigate-next"
          type={Icons.MaterialIcons}
          style={{ marginLeft: "auto" }}
        />
      </Pressable>
    </View>
  );
}
