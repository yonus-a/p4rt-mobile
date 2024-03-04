import { TouchableHighlight } from "react-native";
import styles from "./styles";
import CustomText from "../text";

interface Props {
  onPress: any;
  title: string;
  style?: any;
}

export default function Button({ onPress, title, style = {} }: Props) {
  return (
    <TouchableHighlight onPress={onPress} style={[styles.btn, style]}>
      <CustomText style={styles.btnText}>{title}</CustomText>
    </TouchableHighlight>
  );
}
