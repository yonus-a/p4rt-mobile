import * as SecureStore from "expo-secure-store";
import axios from "axios";

export default async function fetchData({ page, take }, setData) {
  const userId = await SecureStore.getItemAsync("userId");
  const { data } = await axios("/ticket/getUserTicket", {
    params: {
      userId,
      page,
      take,
    },
  });

  setData(data);
}
