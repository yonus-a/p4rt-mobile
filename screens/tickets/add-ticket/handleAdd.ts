import uploadFile from "../../../utils/overal/uploadFile";
import successAlert from "../../../utils/alert/success";
import errorAlert from "../../../utils/alert/error";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

export default async function handleAdd(data) {
  try {
    const userId = await SecureStore.getItemAsync("userId");
    const { attachment, attachment_uri } = data;

    await axios.post("/ticket/addTicket", {
      title: data.title,
      message: data.message,
      unitId: data.unitId,
      file: attachment,
      userId,
    });

    if (attachment) {
      await uploadFile({
        uri: attachment_uri,
        name: attachment,
        uploadPath: "/public/attachments",
      });
    }

    await successAlert({
      msg: "درخواست شما با موفقیت ثبت شد",
    });
  } catch (e) {
    await errorAlert();
  }
}
