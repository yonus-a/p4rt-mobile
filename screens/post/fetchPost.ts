import * as SecureStore from "expo-secure-store";
import axios from "axios";

export default async function fetchData(setData, { id }) {
  const userId = await SecureStore.getItemAsync("userId");
  const { data } = await axios("/posts/getPost", {
    params: {
      userId,
      id,
    },
  });

  setData(data);
}
