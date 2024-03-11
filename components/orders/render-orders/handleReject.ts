import errorAlert from "../../../utils/alert/error";
import axios from "axios";

export default async function handleReject(id, userId) {
  try {
    axios.post("/food/rejectOrder", {
      id,
      userId,
    });
  } catch (e) {
    await errorAlert();
  }
}
