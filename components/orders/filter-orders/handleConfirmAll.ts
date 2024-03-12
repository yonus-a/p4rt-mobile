import errorAlert from "../../../utils/alert/error";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

export default async function handleConfirmAll(date) {
  try {
    const userId = await SecureStore.getItemAsync("userId");
    await axios.post("/food/confirmAll", {
      userId,
      date,
    });
  } catch (e) {
    console.log(e);
    await errorAlert();
  }
}
