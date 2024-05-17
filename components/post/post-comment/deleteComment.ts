import * as SecureStore from "expo-secure-store";
import errorAlert from "../../../utils/alert/error";
import axios from "axios";

export default async function deleteComment(id, fetchNewComment) {
  try {
    const userId = await SecureStore.getItemAsync("userId");
    await axios.post("/posts/deletePostComment", {
      userId,
      id,
    });

    fetchNewComment();
  } catch (e) {
    await errorAlert();
  }
}
