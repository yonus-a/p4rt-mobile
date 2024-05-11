import { TouchableHighlight } from "react-native";
import CustomText from "../text";
import styles from "./styles";

export default function PrimaryButton({
  disabled = false,
  style = {},
  onPress,
  title,
}) {
  return (
    <TouchableHighlight
      style={[styles.btn, style]}
      disabled={disabled}
      onPress={onPress}
    >
      <CustomText style={styles.btnText}>
        {disabled ? "در حال ارسال" : title}
      </CustomText>
    </TouchableHighlight>
  );
}
