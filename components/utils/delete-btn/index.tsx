import { Image, Pressable } from "react-native";
import styles from "./styles";

export default function DeleteBtn({ onPress, style = {} }) {
  return (
    <Pressable onPress={onPress} style={style}>
      <Image
        source={require("../../../assets/icons/delete.png")}
        style={styles.image}
        alt="delete"
        width={30}
        height={30}
      />
    </Pressable>
  );
}
