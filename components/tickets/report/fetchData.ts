import * as SecureStore from "expo-secure-store";
import axios from "axios";

export default async function fetchData(setData) {
  const userId = await SecureStore.getItemAsync("userId");
  const { data } = await axios("/ticket/report", {
    params: {
      userId,
    },
  });
  console.log(data);
  setData(data);
}
