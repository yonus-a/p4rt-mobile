import * as SecureStore from "expo-secure-store";
import axios from "axios";

export default async function fetchData({setUsers, search}) {
  const userId = await SecureStore.getItemAsync("userId");
}
