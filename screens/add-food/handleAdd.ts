import successAlert from "../../utils/alert/success";
import * as SecureStore from "expo-secure-store";
import errorAlert from "../../utils/alert/error";
import axios from "axios";

export default async function handleAdd(data) {
  try {
    const userId = await SecureStore.getItemAsync("userId");
    await axios.post("/food/addFood", {
      ...data,
      userId,
    });

    await successAlert({
      msg: "غذای شما با موفقیت ثبت شد",
    });
  } catch (e) {
    await errorAlert();
  }
}
