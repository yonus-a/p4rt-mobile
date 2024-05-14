import errorAlert from "../utils/alert/error";
import axios from "axios";

export default async function fetchOwghat(setDate) {
  try {
    const { data } = await axios("https://api.keybit.ir/owghat/?city=کرمان");
    setDate(data);
  } catch (e) {
    await errorAlert();
  }
}
