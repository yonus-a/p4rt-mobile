import errorAlert from "../../../utils/alert/error";
import axios from "axios";

export default async function handleReject(id, userId, fetchNewData) {
  try {
    axios.post("/food/rejectOrder", {
      id,
      userId,
    });

    fetchNewData();
  } catch (e) {
    await errorAlert();
  }
}
