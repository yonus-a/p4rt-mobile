import uploadFile from "../../utils/overal/uploadFile";
import successAlert from "../../utils/alert/success";
import * as SecureStore from "expo-secure-store";
import errorAlert from "../../utils/alert/error";
import axios from "axios";

export default async function editFood(id, data, navigation) {
  try {
    const userId = await SecureStore.getItemAsync("userId");
    const { image_uri, image, food } = data;

    await axios.post("/food/editFood", {
      data: { userId, ...food, image },
      id,
    });

    if (image_uri) {
      await uploadFile({
        uploadPath: "public/images/foods",
        uri: image_uri,
        name: image,
      });
    }

    navigation.navigate("foodManagment");
    await successAlert({
      msg: "غذا با موفقیت ویرایش شد",
    });
  } catch (e) {
    console.log(e);
    await errorAlert();
  }
}
