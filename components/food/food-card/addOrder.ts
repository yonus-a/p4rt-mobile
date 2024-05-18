import errorAlert from "../../../utils/alert/error";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

export default async function addOrder(food, navigation) {
  try {
    const userId = await SecureStore.getItemAsync("userId");

    const { data } = await axios.post("/food/addOrder", {
      data: {
        paymentMethod: 1,
        userId,
      },
      foods: [food],
    });
 
    if (data.result?.error) {
      return await errorAlert(data.result?.error);
    }

    navigation.navigate("showOrders");
  } catch (e) {
    console.log(e);
    await errorAlert();
  }
}
