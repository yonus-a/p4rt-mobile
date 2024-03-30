import uploadFile from "../../utils/overal/uploadFile";
import successAlert from "../../utils/alert/success";
import errorAlert from "../../utils/alert/error";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

export default async function handleAddUser(data) {
  try {
    const userId = await SecureStore.getItemAsync("userId");
    const { user, photo, photo_uri } = data;

    await axios.post("/user/addUser", { ...user, photo, authorId: userId });

    await uploadFile({
      uri: photo_uri,
      name: photo,
      uploadPath: "public/images/users",
    });

    await successAlert({
      msg: "کاربر با موفقیت ایجاد شد",
    });
  } catch (e) {
    await errorAlert();
  }
}
