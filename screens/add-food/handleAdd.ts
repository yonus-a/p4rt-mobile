import uploadFile from "../../utils/overal/uploadFile";
import successAlert from "../../utils/alert/success";
import * as SecureStore from "expo-secure-store";
import errorAlert from "../../utils/alert/error";
import axios from "axios";

export default async function handleAdd(data, navigation) {
  try {
    const userId = await SecureStore.getItemAsync("userId");
    const { image_uri, image, food } = data;

    await axios.post("/food/addFood", {
      ...food,
      image,
      userId,
    });

    await uploadFile({
      uploadPath: "public/images/foods",
      uri: image_uri,
      name: image,
    });

    navigation.navigate("foodManagment");
    await successAlert({
      msg: "غذای شما با موفقیت ثبت شد",
    });
  } catch (e) {
    console.log(e);
    await errorAlert();
  }
}
