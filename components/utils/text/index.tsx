import { Text } from "react-native";
import styles from "./styles";

export default function CustomText({
  children,
  style = {},
  numberOfLines = 0,
}) {
  return (
    <Text style={[styles.text, style]} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
}
