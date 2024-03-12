import errorAlert from "../../utils/alert/error";
import axios from "axios";

export default async function fetchData({ setData, page, take, search, date }) {
  try {
    const { data } = await axios("/food/filterOrders", {
      params: {
        search,
        page,
        date,
        take,
      },
    });

    setData(data);
  } catch (e) {
    await errorAlert();
  }
}
