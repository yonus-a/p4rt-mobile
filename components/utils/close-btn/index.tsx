import { Pressable, Image } from "react-native";
import styles from "./styles";

export default function CloseBtn({ onPress, style = {} }) {
  return (
    <Pressable onPress={onPress} style={style}>
      <Image
        source={require("../../../assets/icons/close.png")}
        style={styles.icon}
        alt="close"
      />
    </Pressable>
  );
}
