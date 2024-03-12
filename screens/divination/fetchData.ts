import * as SecureStore from "expo-secure-store";
import axios from "axios";

export default async function fetchData(setData) {
  try {
    const userId = await SecureStore.getItemAsync("userId");
    const { data: date } = await axios.get("/general/getDate");

    const { data } = await axios.get("/divination/getDivinationSeen", {
      params: {
        userId,
        date,
      },
    });

    setData(data);
  } catch (e) {}
}
