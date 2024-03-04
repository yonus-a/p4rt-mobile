import { TouchableHighlight } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import styles from "./styles";
import CustomText from "../text";

export default function FilePicker({ setValue }) {
  const handlePress = async () => {
    const file = await DocumentPicker.getDocumentAsync({});
    const name = file.assets?.[0]?.name;
    setValue("filename", name);
  };

  return (
    <TouchableHighlight style={styles.filePicker} onPress={handlePress}>
      <CustomText>انتخاب فایل...</CustomText>
    </TouchableHighlight>
  );
}
