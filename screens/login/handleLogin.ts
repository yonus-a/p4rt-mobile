import { getHash } from "react-native-otp-verify";
import errorAlert from "../../utils/alert/error";
import axios from "axios";

export default async function handleLogin({ navigation, data, setDisabled }) {
  try {
    setDisabled(true);
    // const hash = await getHash();
    // await axios.post("/signin/generateMobileOTP", { ...data, hash: hash[0] });
    navigation.navigate("verifyOTP", data);
  } catch (e) {
    await errorAlert();
  } finally {
    setDisabled(false);
  }
}
