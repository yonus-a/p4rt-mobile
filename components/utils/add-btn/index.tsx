import { Pressable, Image, Text } from "react-native";
import styles from "./styles";

export default function AddBtn({ onPress }) {
  return (
    <Pressable style={styles.addBtn} onPress={onPress}>
      <Text style={styles.text}>اضافه کردن</Text>
      <Image
        source={require("../../../assets/icons/add.png")}
        style={styles.icon}
        height={30}
        width={30}
        alt="add"
      />
    </Pressable>
  );
}
