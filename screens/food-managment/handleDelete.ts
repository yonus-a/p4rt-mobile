import errorAlert from "../../utils/alert/error";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

export default async function handleDelete(foodId, fetchNewData) {
  try {
    const userId = await SecureStore.getItemAsync("userId");

    await axios.post("/food/deleteFood", {
      userId,
      foodId,
    });

    fetchNewData();
  } catch (e) {
    await errorAlert();
  }
}
