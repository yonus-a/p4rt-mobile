import { Text } from "react-native";
import styles from "./styles";

export default function CustomText({ children, style = {} }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}
