import { Pressable, View, Image } from "react-native";
import styles from "./styles";

interface Props {
  onPress: any;
}

export default function CloseBtn({ onPress }: Props) {
  return (
    <Pressable onPress={onPress}>
      <Image
        source={require("../../../assets/icons/close.png")}
        style={styles.icon}
        alt="close"
        width={30}
        height={30}
      />
    </Pressable>
  );
}
