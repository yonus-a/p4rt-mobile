import errorAlert from "../../../utils/alert/error";
import successAlert from "../../../utils/alert/success";
import axios from "axios";

export default async function handleAddAnswers(data) {
  try {
    await axios.post("/critics/addCriticsAnswer", data);

    await successAlert({
      msg: "پیام شما با موفقیت ارسال شد",
    });
  } catch (e) {
    await errorAlert();
  }
}
