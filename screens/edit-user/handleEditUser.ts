import successAlert from "../../utils/alert/success";
import errorAlert from "../../utils/alert/error";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

export default async function handleEditUser(id, data) {
  try {
    const userId = await SecureStore.getItemAsync("userId");
    await axios.post("/user/editUser", {
      data: { ...data, authorId: userId },
      id,
    });
    await successAlert({
      msg: "کاربر",
    });
  } catch (e) {
    console.log(e);
    await errorAlert();
  }
}
