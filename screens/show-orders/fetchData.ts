import * as SecureStore from "expo-secure-store";
import axios from "axios";

export default async function fetchData({ setData, page, take, search }) {
  const userId = await SecureStore.getItemAsync("userId");
  const { data } = await axios("/food/filterUserOrders", {
    params: {
      page,
      take,
      userId,
      search,
    },
  });

  setData(data);
}
