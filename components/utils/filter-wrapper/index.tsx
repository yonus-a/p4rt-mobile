import { View } from "react-native";
import styles from "./styles";

export default function FilterWrapper({ children, style = {} }) {
  return <View style={[styles.filterWrapper, style]}>{children}</View>;
}
