import { useNavigation } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

export default function useVefifyToken() {
  const navigation: any = useNavigation();

  (async () => {
    const token = await SecureStore.getItemAsync("_token");

    if (!token) {
      navigation.navigate("Signin");
      return false;
    }

    const { data } = await axios.post("/signin/vefifyToken", {
      token,
    });

    if (!data.success) {
      navigation.navigate("Signin");
    }
  })();
}
