import * as SecureStore from "expo-secure-store";
import axios from "axios";

export default async function addChatLine({ message, chatId }) {
  const userId = await SecureStore.getItemAsync("userId");
  return await axios.post("/ticket/addTicketChatLine", {
    userId,
    message,
    chatId,
  });
}
