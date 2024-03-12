import successAlert from "../../utils/alert/success";
import errorAlert from "../../utils/alert/error";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

export default async function handleAddUser(data) {
  const userId = await SecureStore.getItemAsync("userId");

  try {
    await axios.post("/user/addUser", { ...data, authorId: userId });
    await successAlert({
      msg: "کاربر",
    });
  } catch (e) {
    await errorAlert();
  }
}
