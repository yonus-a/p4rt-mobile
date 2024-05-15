import { Pressable, View } from "react-native";
import CustomText from "../text";
import styles from "./styles";

export default function Counter({ setCount, count, style = {} }) {
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <View style={[styles.count, style]}>
      <Pressable style={styles.btn} onPress={handleIncrement}>
        <CustomText style={styles.text}>+</CustomText>
      </Pressable>
      <CustomText>{count}</CustomText>
      <Pressable style={styles.btn} onPress={handleDecrement}>
        <CustomText style={styles.text}>-</CustomText>
      </Pressable>
    </View>
  );
}
