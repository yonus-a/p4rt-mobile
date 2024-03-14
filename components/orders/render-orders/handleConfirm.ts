import errorAlert from "../../../utils/alert/error";
import axios from "axios";

export default async function handleConfirm(id, userId, fetchNewData) {
  try {
    axios.post("/food/conformOrder", {
      id,
      userId,
    });

    fetchNewData();
  } catch (e) {
    await errorAlert();
  }
}
