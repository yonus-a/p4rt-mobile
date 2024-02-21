import { View } from "react-native";
import styles from "./styles";

interface Props {
  children: any;
}

export default function Container({ children }: Props) {
  return <View style={styles.container}>{children}</View>;
}
