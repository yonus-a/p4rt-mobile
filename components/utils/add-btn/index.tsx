import { Pressable, Image } from "react-native";
import styles from "./styles";
import CustomText from "../text";

export default function AddBtn({ onPress }) {
  return (
    <Pressable style={styles.addBtn} onPress={onPress}>
      <CustomText style={styles.text}>اضافه کردن</CustomText>
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
