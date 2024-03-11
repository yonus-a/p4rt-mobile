import * as SecureStore from "expo-secure-store";
import axios from "axios";
import moment from "jalali-moment";

export default async function fetchData({ setData, page, take, search, date }) {
  const userId = await SecureStore.getItemAsync("userId");
  const nextDate = moment.from(date, "fa", "YYYY/MM/DD");
  const { data } = await axios("/food/filterUserOrders", {
    params: {
      page,
      take,
      userId,
      search,
      date: nextDate,
    },
  });

  if (!data) return false;

  setData(data);
}
