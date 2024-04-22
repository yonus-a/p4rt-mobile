import * as SecureStore from "expo-secure-store";
import axios from "axios";

interface Props {
  privatePage: number;
  privateTake: number;
  publicPage: number;
  publicTake: number;
  setPublicNotifs: any;
  setPrivateNotifs: any;
}

export default async function fetchData({
  setPublicNotifs,
  setPrivateNotifs,
  privatePage,
  privateTake,
  publicPage,
  publicTake,
}: Props) {
  
  const userId = await SecureStore.getItemAsync("userId");

  const { data: publicNotifs } = await axios(
    "/notification/getPublicNotification",
    {
      params: {
        page: publicPage,
        take: publicTake,
        userId,
      },
    }
  );

  const { data: privateNotifs } = await axios(
    "/notification/getPrivateNotification",
    {
      params: {
        page: privatePage,
        take: privateTake,
        userId,
      },
    }
  );

  setPrivateNotifs(privateNotifs);
  setPublicNotifs(publicNotifs);
}
