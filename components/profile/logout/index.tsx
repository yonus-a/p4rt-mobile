import ButtonIcon from "../../utils/button-icon";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

export default function Logout({ navigation }) {
  const handlePress = async (e) => {
    e.stopPropagation();

    try {
      const token = await SecureStore.getItemAsync("_token");

      if (token) {
        await SecureStore.deleteItemAsync("_token");
        await axios.post("/signin/logout", { token });
      }

      navigation.navigate("Signin");
    } catch (e) {}
  };

  return (
    <ButtonIcon
      source={require("../../../assets/icons/off.png")}
      onPress={handlePress}
      height={30}
      width={30}
      alt="off"
    />
  );
}
