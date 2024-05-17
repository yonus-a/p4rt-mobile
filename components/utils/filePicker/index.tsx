import * as DocumentPicker from "expo-document-picker";
import { TouchableHighlight } from "react-native";
import CustomText from "../text";
import styles from "./styles";

export default function FilePicker({ setValue, name = "filename" }) {
  const handlePress = async () => {
    const file = await DocumentPicker.getDocumentAsync({});
    const filename = file.assets?.[0]?.name;
    const uri = file.assets?.[0]?.uri;
    setValue(name + "_uri", uri);
    setValue(name, new Date().getTime() + "_" + filename);
  };

  return (
    <TouchableHighlight style={styles.filePicker} onPress={handlePress}>
      <CustomText style={{ color: "#bbb" }}>انتخاب فایل...</CustomText>
    </TouchableHighlight>
  );
}
