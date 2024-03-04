import { Pressable, View } from "react-native";
import DeleteBtn from "../delete-btn";
import styles from "./styles";
import CustomText from "../text";

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
          <CustomText style={styles.text}>-</CustomText>
        </Pressable>
      ) : (
        <DeleteBtn onPress={onDelete} />
      )}
      <CustomText>{count}</CustomText>
      <Pressable style={styles.btn} onPress={onIncrement}>
        <CustomText style={styles.text}>+</CustomText>
      </Pressable>
    </View>
  );
}
