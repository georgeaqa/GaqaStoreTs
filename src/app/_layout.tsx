import { Slot } from "expo-router";
import { useFonts } from "expo-font";
import "../../global.css";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Agbalumo: require("../assets/fonts/Agbalumo.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return <Slot />;
}
