import errorAlert from "../../../utils/alert/error";
import axios from "axios";

export default async function handleDeleteCritics(
  id: number,
  setCritics: any,
  critics: any
) {
  try {
    await axios.post("/critics/deleteCritics", {
      id,
    });

    setCritics({
      ...critics,
      data: critics.data.filter((item) => item.id !== id),
    });
  } catch (e) {
    await errorAlert();
  }
}
