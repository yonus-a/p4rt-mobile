import errorAlert from "../../utils/alert/error";
import successAlert from "../../utils/alert/success";
import axios from "axios";

export default async function handleSend({ message, receptor }) {
  try {
    await axios.post("/sms-panel/sendSms", {
      message,
      receptor,
    });

    await successAlert({
      msg: "پیام با موفقیت ارسال شد",
    });
  } catch (e) {
    await errorAlert();
  }
}
