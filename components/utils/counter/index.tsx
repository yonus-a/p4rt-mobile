import { Pressable, View, Text } from "react-native";
import DeleteBtn from "../delete-btn";
import styles from "./styles";

export default function Counter({
  showDelete = false,
  onIncrement,
  onDecrement,
  onDelete = () => {},
  count,
}) {
  return (
    <View style={styles.count}>
      {!showDelete ? (
        <Pressable style={styles.btn} onPress={onDecrement}>
          <Text style={styles.text}>-</Text>
        </Pressable>
      ) : (
        <DeleteBtn onPress={onDelete} />
      )}
      <Text>{count}</Text>
      <Pressable style={styles.btn} onPress={onIncrement}>
        <Text style={styles.text}>+</Text>
      </Pressable>
    </View>
  );
}
