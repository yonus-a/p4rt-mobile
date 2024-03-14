import errorAlert from "../../utils/alert/error";
import axios from "axios";

export default async function fetchData({ setData, page, take, search }) {
  try {
    const { data } = await axios("/user/filterUser", {
      params: {
        search,
        page,
        take,
      },
    });

    setData(data);
  } catch (e) {
    await errorAlert();
  }
}
