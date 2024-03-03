import { View, Image } from "react-native";
import LikeBtn from "../../utils/like-btn";
import styles from "./styles";

export default function FoodImage({ source }) {
  const handleLike = () => {};

  return (
    <View style={styles.imageFood}>
      <Image source={source} width={200} height={200} style={styles.image} />
      <LikeBtn active={true} count={15} onPress={handleLike} style={styles.likeBtn} />
    </View>
  );
}
