import * as SecureStore from "expo-secure-store";
import axios from "axios";

export default async function rejectOrder(id) {
  const userId = await SecureStore.getItemAsync("userId");
  return await axios.post("/food/rejectBeforeConfirmOrder", {
    userId,
    id,
  });
}
