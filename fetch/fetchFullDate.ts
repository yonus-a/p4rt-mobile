import errorAlert from "../utils/alert/error";
import axios from "axios";

export default async function fetchFullDate(setDate) {
  try {
    const { data } = await axios("https://api.keybit.ir/time/");
    setDate(data);
  } catch (e) {
    await errorAlert();
  }
}
