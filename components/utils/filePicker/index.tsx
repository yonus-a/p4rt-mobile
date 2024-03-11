import { TouchableHighlight } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import styles from "./styles";
import CustomText from "../text";

export default function FilePicker({ setValue, name = "filename" }) {
  const handlePress = async () => {
    const file = await DocumentPicker.getDocumentAsync({});
    const filename = file.assets?.[0]?.name;
    setValue(name, filename);
  };

  return (
    <TouchableHighlight style={styles.filePicker} onPress={handlePress}>
      <CustomText>انتخاب فایل...</CustomText>
    </TouchableHighlight>
  );
}
