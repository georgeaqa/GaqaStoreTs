import { View, Image, Pressable } from "react-native";
import CustomText from "./CustomText";
import CustomIcon, { Icons } from "./CustomIcon";
import { useAuth } from "@/src/providers/Authprovider";
import { clearCart } from "../store/actions/cart.action";
import { log_out } from "../lib/authSupabase";
import { useDispatch } from "react-redux";
import { router } from "expo-router";
import React from "react";

export default function CustomHomeMenu() {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(clearCart());
    log_out();
  };
  return (
    <View className="items-center justify-center gap-3 bg-white w-full">
      <Image
        source={{
          uri: "https://s.acdn.ur-img.com/media/players/703/703540/7035409.png?1723930375",
        }}
        className="w-[200px] aspect-square"
      />
      <CustomText>{user?.email}</CustomText>

      <Pressable
        className="w-full flex-row gap-2 border-b-2 border-black active:opacity-20"
        onPress={() => router.push("/Home/Profile/UserProfile")}
      >
        <CustomIcon name="profile" type={Icons.AntDesign} />
        <CustomText>Perfil</CustomText>
        <CustomIcon
          name="navigate-next"
          type={Icons.MaterialIcons}
          style={{ marginLeft: "auto" }}
        />
      </Pressable>

      <Pressable
        className="w-full flex-row gap-2 border-b-2 border-black active:opacity-20"
        onPress={() => router.push("/Home/Orders/OrdersList")}
      >
        <CustomIcon
          name="clipboard-list-outline"
          type={Icons.MaterialCommunityIcons}
        />
        <CustomText>Pedidos realizados</CustomText>
        <CustomIcon
          name="navigate-next"
          type={Icons.MaterialIcons}
          style={{ marginLeft: "auto" }}
        />
      </Pressable>

      <Pressable
        className="w-full flex-row gap-2 border-b-2 border-black active:opacity-20"
        onPress={() => logout()}
      >
        <CustomIcon name="log-out-outline" type={Icons.Ionicons} />
        <CustomText>Cerrar sesión</CustomText>
        <CustomIcon
          name="navigate-next"
          type={Icons.MaterialIcons}
          style={{ marginLeft: "auto" }}
        />
      </Pressable>
    </View>
  );
}
