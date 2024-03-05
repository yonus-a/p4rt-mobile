import * as SecureStore from "expo-secure-store";
import axios from "axios";

export default async function deleteComment(id) {
  const userId = await SecureStore.getItemAsync("userId");
  return await axios.post("/posts/deletePostComment", {
    userId,
    id,
  });
}
