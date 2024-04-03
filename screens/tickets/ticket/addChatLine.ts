import errorAlert from "../../../utils/alert/error";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

export default async function addChatLine({ message, chatId }: any) {
  try {
    const userId = await SecureStore.getItemAsync("userId");
    await axios.post("/ticket/addTicketChatLine", {
      userId,
      message,
      chatId,
    });
  } catch (e) {
    await errorAlert();
  }
}
