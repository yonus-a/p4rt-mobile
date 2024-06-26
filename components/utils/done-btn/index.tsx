import { Pressable, Image } from "react-native";
import styles from "./styles";

export default function DoneBtn({ onPress, style = {} }) {
  return (
    <Pressable onPress={onPress} style={style}>
      <Image
        source={require("../../../assets/icons/black-done.png")}
        style={styles.icon}
        alt="close"
      />
    </Pressable>
  );
}
