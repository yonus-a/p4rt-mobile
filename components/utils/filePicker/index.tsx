import * as DocumentPicker from "expo-document-picker";
import { TouchableHighlight } from "react-native";
import CustomText from "../text";
import styles from "./styles";
import axios from "axios";

export default function FilePicker({ setValue, name = "filename" }) {
  const handlePress = async () => {
    const file = await DocumentPicker.getDocumentAsync({});
    const filename = file.assets?.[0]?.name;

    let body = new FormData();

    body.append("image", {
      uri: file.assets[0].uri,
      filename: "imageName.png",
      name: "photo.png",
      type: "image/png",
    });

    try {
      await axios({
        method: "post",
        url: "/upload",
        data: body,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (error) {
      console.log(error);
    }``
    setValue(name, filename);
  };

  return (
    <TouchableHighlight style={styles.filePicker} onPress={handlePress}>
      <CustomText>انتخاب فایل...</CustomText>
    </TouchableHighlight>
  );
}
