import { useNavigation } from "@react-navigation/native";
import PressableIcon from "../../utils/pressable-icon";
import quickAccessStyle from "../quick-access/styles";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

export default function Logout({ onPress }) {
  const navigation: any = useNavigation();

  const handlePress = async (e) => {
    try {
      onPress();
      const token = await SecureStore.getItemAsync("_token");
      await SecureStore.deleteItemAsync("_token");
      await SecureStore.deleteItemAsync("userId");
      await SecureStore.deleteItemAsync("profile");
      await SecureStore.deleteItemAsync("fullName");
      await axios.post("/signin/logout", { token });
      navigation.navigate("Signin");
    } catch (e) {}
  };

  return (
    <PressableIcon
      srouce={require("../../../assets/icons/circle-off.png")}
      iconStyle={quickAccessStyle.icon}
      onPress={handlePress}
      alt="logout"
    />
  );
}
