import { Pressable, Image } from "react-native";
import styles from "./styles";

export default function ExistBtn({ onPress, style = {} }) {
  return (
    <Pressable onPress={onPress} style={style}>
      <Image
        source={require("../../../assets/icons/exit.png")}
        style={styles.icon}
        alt="exit"
      />
    </Pressable>
  );
}
