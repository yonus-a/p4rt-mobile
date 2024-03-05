import * as SecureStore from "expo-secure-store";
import axios from "axios";

export default async function addLike(postId) {
  const userId = await SecureStore.getItemAsync("userId");
  return await axios.post("/posts/addPostLikes", {
    userId,
    postId,
  });
}
