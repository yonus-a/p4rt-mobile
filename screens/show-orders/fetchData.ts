import * as SecureStore from "expo-secure-store";
import axios from "axios";

export default async function fetchData({ setData, page, take, search }) {
  const userId = await SecureStore.getItemAsync("userId");
  const { data } = await axios("/food/filterOrders", {
    params: {
      page,
      take,
      userId,
      searchParams: {
        search,
      },
    },
  });

  if (!data) return false;

  setData(data);
}
