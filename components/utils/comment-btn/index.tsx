import { Pressable, Image, View } from "react-native";
import styles from "./styles";

export default function CommentBtn({ onPress, style = {} }) {
  return (
    <Pressable style={[styles.commentBtn, style]} onPress={onPress}>
      <View style={styles.circle}>
        <Image
          source={require("../../../assets/icons/comment.png")}
          style={styles.image}
          alt="comment"
          width={24}
          height={24}
        />
      </View>
    </Pressable>
  );
}
