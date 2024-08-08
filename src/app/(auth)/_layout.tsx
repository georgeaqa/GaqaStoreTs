import { Stack, Redirect } from "expo-router";
import { useAuth } from "@/src/providers/Authprovider";
export default function AuthLayout() {
  const { user } = useAuth();

  if (user) {
    return <Redirect href="/Profile/ProfileUser" />;
  }

  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
        headerTitleStyle: { fontFamily: "Agbalumo", color: "#FF0000" },
      }}
    >
      <Stack.Screen name="Login" options={{ headerShown: false }} />
      <Stack.Screen name="Register" options={{ title: "Registro" }} />
      <Stack.Screen
        name="ForgotPassword"
        options={{ title: "Recuperar Contraseña" }}
      />
    </Stack>
  );
}
