import { Pressable, View } from "react-native";
import DeleteBtn from "../delete-btn";
import CustomText from "../text";
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
