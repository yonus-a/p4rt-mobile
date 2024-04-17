import CustomCartProvider from "./components/providers/custom-cart-provider";
import { NavigationContainer } from "@react-navigation/native";
import Alert from "./components/overal/alert";
import { StatusBar } from "expo-status-bar";
import { I18nManager } from "react-native";
import { AppRegistry } from "react-native";
import "react-native-gesture-handler";
import Splash from "./screens/splash";
import { useFonts } from "expo-font";
import { useState } from "react";
import Routes from "./routes";

I18nManager.allowRTL(false);
AppRegistry.registerHeadlessTask("SomeTaskName", () => require("./notif"));

// configs
import "./axios";

export default function App() {
  const [splash, setSplash] = useState(true);

  const [fontsLoaded] = useFonts({
    IRANSans: require("./assets/fonts/IRANSans.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  setTimeout(() => {
    setSplash(false);
  }, 1000);

  return (
    <>
      {splash ? (
        <Splash />
      ) : (
        <NavigationContainer>
          <CustomCartProvider>
            <Routes />
          </CustomCartProvider>
          <StatusBar style="auto" />
          <Alert />
        </NavigationContainer>
      )}
    </>
  );
}
