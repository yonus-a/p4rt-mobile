import errorAlert from "../../../utils/alert/error";
import axios from "axios";

export default async function handleConfirm(id, userId) {
  try {
    axios.post("/food/conformOrder", {
      id,
      userId,
    });
  } catch (e) {
    await errorAlert();
  }
}
