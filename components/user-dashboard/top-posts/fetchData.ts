import errorAlert from "../../../utils/alert/error";
import axios from "axios";

export default async function fetchData(setPosts) {
  try {
    const { data } = await axios("/posts/getTopPosts");

    setPosts(data);
  } catch (e) {
    await errorAlert();
  }
}
