import { Stack } from "expo-router";

export default function ProductsLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
        headerTitleStyle: { fontFamily: "Agbalumo", color: "#FF0000" },
        animation: "slide_from_right",
      }}
    />
  );
}
