import * as SecureStore from "expo-secure-store";
import axios from "axios";

export default async function fetchData(setData, setComments, { id }) {
  const userId = await SecureStore.getItemAsync("userId");
  const { data } = await axios("/posts/getPost", {
    params: {
      userId,
      id,
    },
  });

  setData(data);

  const { data: comments } = await axios("/posts/getComments", {
    params: {
      id,
    },
  });

  setComments(comments);
}
