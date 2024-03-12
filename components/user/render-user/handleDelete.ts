import errorAlert from "../../../utils/alert/error";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

export default async function deleteUser(id) {
  try {
    const userId = await SecureStore.getItemAsync("userId");
    await axios.post("/user/deleteUser", {
      params: {
        userId,
        id,
      },
    });
  } catch (e) {
    console.log(e);
    await errorAlert();
  }
}
