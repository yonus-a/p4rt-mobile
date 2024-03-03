import "react-native-gesture-handler";
import CustomCartProvider from "./components/providers/custom-cart-provider";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Routes from "./routes";

// configs
import "./axios";

export default function App() {
  return (
    <NavigationContainer>
      <CustomCartProvider>
        <Routes />
      </CustomCartProvider>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
