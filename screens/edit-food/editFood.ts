import successAlert from "../../utils/alert/success";
import * as SecureStore from "expo-secure-store";
import errorAlert from "../../utils/alert/error";
import axios from "axios";

export default async function editFood(id, data) {
  try {
    const userId = await SecureStore.getItemAsync("userId");
    await axios.post("/food/editFood", {
      data: { userId, ...data },
      id,
    });
    await successAlert({
      msg: "غذا با موفقیت ویرایش شد",
    });
  } catch (e) {
    await errorAlert();
  }
}
