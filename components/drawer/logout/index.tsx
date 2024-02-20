import ButtonIcon from "../../utils/button-icon";
import SecureStore from "expo-secure-store";

export default function Logout() {
  const handlePress = async (e) => {
    e.stopPropagation();

    try {
      const token = await SecureStore.deleteItemAsync("_token");
      // await axios.post("/signin/logout");
    } catch (e) {}
  };

  return (
    <ButtonIcon
      source={require("../../../assets/icons/off.png")}
      onPress={handlePress}
      height={40}
      width={40}
      alt="off"
    />
  );
}
