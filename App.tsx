import "react-native-gesture-handler";
import CustomCartProvider from "./components/providers/custom-cart-provider";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import Routes from "./routes";

// configs
import "./axios";
import Alert from "./components/overal/alert";

export default function App() {
  const [fontsLoaded] = useFonts({
    IRANSans: require("./assets/fonts/IRANSans.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <CustomCartProvider>
        <Routes />
      </CustomCartProvider>
      <StatusBar style="auto" />
      <Alert />
    </NavigationContainer>
  );
}
