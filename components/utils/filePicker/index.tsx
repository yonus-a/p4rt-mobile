import { TouchableHighlight, Text } from "react-native";
import styles from "./styles";

export default function FilePicker({ setValue }) {
  const handlePress = () => {
    
  };

  return (
    <TouchableHighlight style={styles.filePicker} onPress={handlePress}>
      <Text>انتخاب فایل...</Text>
    </TouchableHighlight>
  );
}
