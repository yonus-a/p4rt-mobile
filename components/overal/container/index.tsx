import { View } from "react-native";
import styles from "./styles";

interface Props {
  children: any;
  style?: any;
}

export default function Container({ children, style }: Props) {
  return <View style={[styles.container, style]}>{children}</View>;
}
