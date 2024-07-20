import { Stack, Redirect } from "expo-router";
import { useAuth } from "@/src/providers/Authprovider";
export default function AuthLayout() {
  const { user } = useAuth();

  if (user) {
    return <Redirect href="Products/ProductsList" />;
  }

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
