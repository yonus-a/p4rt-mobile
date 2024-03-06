import { Image, View } from "react-native";
import Navigate from "../../utils/navigate";
import CustomText from "../../utils/text";
import styles from "./styles";

export default function PostCard({ post, style = {} }) {
  return (
    <View style={styles.container}>
      <Navigate style={[styles.card, style]} to="post" params={{ id: post.id }}>
        <Image
          source={{ uri: `https://p4rt.ir/public/images/${post.image}` }}
          style={styles.image}
          alt={post.title}
          width={300}
          height={300}
        />
        <View style={styles.body}>
          <CustomText style={styles.title}>{post.title}</CustomText>
          <CustomText style={styles.desc}>{post.description}</CustomText>
        </View>
      </Navigate>
    </View>
  );
}
