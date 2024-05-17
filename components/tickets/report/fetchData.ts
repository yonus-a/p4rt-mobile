import * as SecureStore from "expo-secure-store";
import axios from "axios";

export default async function fetchData(setData) {
  const userId = await SecureStore.getItemAsync("userId");
  const { data } = await axios("/ticket/countUserTicket", {
    params: {
      userId,
    },
  });

  setData(data);
}
