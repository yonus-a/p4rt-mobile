import * as SecureStore from "expo-secure-store";
import axios from "axios";

export default async function fetchData(
  setAnswers: any,
  page: number,
  take: number
) {
  const userId = await SecureStore.getItemAsync("userId");
  const { data } = await axios("/critics/getAdminAnswer", {
    params: {
      userId,
      page,
      take,
    },
  });

  console.log(take);

  setAnswers(data);
}
