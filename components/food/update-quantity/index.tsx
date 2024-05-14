import Counter from "../../utils/counter";
import { View } from "react-native";
import styles from "./styles";

interface Props {
  quantity: number;
  setQuantity: any;
  itemId: string;
}

export default function UpdateQuantity({
  setQuantity,
  quantity,
  itemId,
}: Props) {
  return <View style={styles.updateQuantity}></View>;
}
