import { Image, Pressable } from "react-native";
import styles from "./styles";

interface Props {
  onPress: any;
}

export default function DeleteBtn({ onPress }: Props) {
  return (
    <Pressable onPress={onPress}>
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
