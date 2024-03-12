import { TouchableHighlight } from "react-native";
import CustomText from "../text";
import styles from "./styles";

interface Props {
  onPress: any;
  title: string;
  style?: any;
}

export default function PrimaryButton({ onPress, title, style = {} }: Props) {
  return (
    <TouchableHighlight onPress={onPress} style={[styles.btn, style]}>
      <CustomText style={styles.btnText}>{title}</CustomText>
    </TouchableHighlight>
  );
}
