import * as SecureStore from "expo-secure-store";
import axios from "axios";

export default async function addComment({ text, foodId }) {
  const userId = await SecureStore.getItemAsync("userId");
  return await axios.post("/food/addFoodComment", {
    text,
    foodId,
    userId,
  });
}
