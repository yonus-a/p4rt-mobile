import * as SecureStore from "expo-secure-store";
import axios from "axios";

export default async function addOrder(foods) {
  const userId = await SecureStore.getItemAsync("userId");

  return await axios.post("/food/addOrder", {
    data: {
      paymentMethod: 1,
      userId,
    },
    foods,
  });
}
