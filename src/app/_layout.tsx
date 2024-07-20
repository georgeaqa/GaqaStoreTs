import { Slot } from "expo-router";
import { useFonts } from "expo-font";
import AuthProvider from "../providers/Authprovider";
import "../../global.css";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Agbalumo: require("../assets/fonts/Agbalumo.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
}
