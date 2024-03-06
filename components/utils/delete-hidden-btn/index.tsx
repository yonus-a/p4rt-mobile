import DeleteBtn from "../delete-btn";
import { View } from "react-native";
import styles from "./styles";

export default function DeleteHiddenBtn({ onPress }) {
  return (
    <View style={styles.hiddenItem}>
      <DeleteBtn onPress={onPress} />
    </View>
  );
}
