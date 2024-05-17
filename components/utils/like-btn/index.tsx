import { Pressable, Image } from "react-native";
import styles from "./styles";
import CustomText from "../text";

export default function LikeBtn({ active, count, onPress, style = {} }) {
  const garyHart = require("../../../assets/icons/unlike.png");
  const redHart = require("../../../assets/icons/like.png");

  return (
    <Pressable style={[styles.likeBtn, style]} onPress={onPress}>
      <CustomText>{count}</CustomText>
      <Image
        source={active ? redHart : garyHart}
        style={styles.image}
        width={24}
        height={24}
        alt="like"
      />
    </Pressable>
  );
}
