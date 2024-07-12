import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
        headerTitleStyle: { fontFamily: "Agbalumo" },
      }}
    >
      <Stack.Screen name="Login" options={{ title: "Inicio" }} />
      <Stack.Screen name="Register" options={{ title: "Registro" }} />
      <Stack.Screen
        name="ForgotPassword"
        options={{ title: "Recuperar Contraseña" }}
      />
    </Stack>
  );
}
