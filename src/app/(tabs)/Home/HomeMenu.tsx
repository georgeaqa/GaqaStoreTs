import { View } from "react-native";
import { Stack } from "expo-router";
import { CustomHomeMenu } from "@/src/components";
import React from "react";

export default function ProfileUser() {
  return (
    <View className="flex-1 items-center justify-center p-1 bg-white">
      <CustomHomeMenu />
    </View>
  );
}
