import { TouchableHighlight, Text } from "react-native";
import styles from "./styles";

interface Props {
  onPress: any;
  title: string;
  style?: any;
}

export default function Button({ onPress, title, style = {} }: Props) {
  return (
    <TouchableHighlight onPress={onPress} style={[styles.btn, style]}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableHighlight>
  );
}
