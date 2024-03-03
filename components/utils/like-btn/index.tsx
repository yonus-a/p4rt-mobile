import { Pressable, Image, Text, View } from "react-native";
import styles from "./styles";

export default function LikeBtn({ active, count, onPress, style }) {
  const garyHart = require("../../../assets/icons/gray-hart.png");
  const redHart = require("../../../assets/icons/red-hart.png");

  return (
    <Pressable style={[styles.likeBtn, style]} onPress={onPress}>
      <View style={styles.circle}>
        <Image
          source={active ? redHart : garyHart}
          style={styles.image}
          width={24}
          height={24}
          alt="like"
        />
      </View>
      <Text style={styles.count}>{count}</Text>
    </Pressable>
  );
}
