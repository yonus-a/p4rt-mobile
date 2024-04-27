import errorAlert from "../utils/alert/error";
import axios from "axios";

export default async function fetchDate(setDate) {
  try {
    const { data } = await axios("/general/getDate");
    setDate(new Date(data));
  } catch (e) {
    await errorAlert();
  }
}
