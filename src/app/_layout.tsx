import { Slot } from "expo-router";
import { useFonts } from "expo-font";
import AuthProvider from "../providers/Authprovider";
import { Provider } from "react-redux";
import { store } from "../store";
import "../../global.css";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Agbalumo: require("../assets/fonts/Agbalumo.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <AuthProvider>
        <Slot />
      </AuthProvider>
    </Provider>
  );
}
