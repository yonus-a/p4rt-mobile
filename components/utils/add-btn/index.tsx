import { Pressable, Image } from "react-native";
import CustomText from "../text";
import styles from "./styles";

export default function AddBtn({ onPress, style = {} }) {
  return (
    <Pressable style={[styles.addBtn, style]} onPress={onPress}>
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
