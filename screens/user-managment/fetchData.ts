import errorAlert from "../../utils/alert/error";
import axios from "axios";

export default async function fetchData({ setData, page, take }) {
  try {
    const { data } = await axios("/user/filterUser", {
      params: {
        page,
        take,
      },
    });

    setData(data);
  } catch (e) {
    await errorAlert();
  }
}
