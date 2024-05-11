import errorAlert from "../../utils/alert/error";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

export default async function handleVerify({ value, code, navigation }) {
  if (value.length === 4) {
    try {
      const { data } = await axios.post("/signin/verifyOTP", {
        code,
        otp: value,
      });

      const { data: user } = await axios("user/getUser", {
        params: {
          id: code,
        },
      });

      await SecureStore.setItemAsync("_token", data.token);
      await SecureStore.setItemAsync("userId", code);
      await SecureStore.setItemAsync("profile", user.photo);
      await SecureStore.setItemAsync(
        "fullName",
        user.firstname + " " + user.lastname
      );
      navigation.navigate("dashboard");
    } catch (e) {
      await errorAlert();
    }
  }
}
