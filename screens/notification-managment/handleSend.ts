import successAlert from "../../utils/alert/success";
import * as SecureStore from "expo-secure-store";
import errorAlert from "../../utils/alert/error";
import axios from "axios";

export default async function handleSend(data) {
  try {
    const userId = await SecureStore.getItemAsync("userId");

    const options = {
      message: data.message,
      send_sms: +data.send_sms,
      priority: +data.priority,
      createdAt: new Date(),
      title: data.title,
      userId,
    };

    if (data.everyone) {
      await axios.post("/notification/addPublicNotification", {
        ...options,
      });
    } else {
      await axios.post("/notification/addPrivateNotification", {
        receptors: data.receptors,
        data: options,
      });
    }

    await successAlert({
      msg: "پیام شما با موفقیت ثبت شد",
    });
  } catch (e) {
    console.log(e);
    await errorAlert();
  }
}
