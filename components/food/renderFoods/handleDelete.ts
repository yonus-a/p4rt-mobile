import successAlert from "../../../utils/alert/success";
import errorAlert from "../../../utils/alert/error";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

export default async function handleDelete(foodId) {
  try {
    const userId = await SecureStore.getItemAsync("userId");
    await axios.post("/food/deleteFood", {
      userId,
      foodId,
    });

    await successAlert({
      msg: "غدا با موفقیت حذف شد ",
    });
  } catch (e) {
    await errorAlert();
  }
}
