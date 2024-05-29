import * as SecureStore from "expo-secure-store";
import axios from "axios";

export default async function fetchData(setData) {
  try {
    const userId = await SecureStore.getItemAsync("userId");
    const { data: date } = await axios.get("/general/getDate");
    const hadis = await fetch("https://api.keybit.ir/hadis/");
    const fact = await fetch("https://api.keybit.ir/ayamidanid/");

    const { data } = await axios.get("/divination/getDivinationSeen", {
      params: {
        userId,
        date,
      },
    });


    setData({
      hadis: (await hadis.json()).result,
      divination: data.divination,
      fact: (await fact.json()),
    });
  } catch (e) {}
}
