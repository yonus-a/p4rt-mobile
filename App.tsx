import DropdownAlert, { DropdownAlertData } from "react-native-dropdownalert";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Routes from "./routes";

export let alert = (_data: DropdownAlertData) =>
  new Promise<DropdownAlertData>((res) => res);

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
      <StatusBar style="auto" />
      <DropdownAlert alert={(func) => (alert = func)} />
    </NavigationContainer>
  );
}
