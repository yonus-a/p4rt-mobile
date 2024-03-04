import { Pressable, Image, View } from "react-native";
import styles from "./styles";
import CustomText from "../../utils/text";

interface Props {
  post: any;
}

export default function PostCard({ post }: Props) {
  return (
    <Pressable style={styles.card}>
      <Image
        source={{ uri: `https://p4rt.ir/public/images/${post.image}` }}
        alt={post.title}
        width={300}
        height={300}
        style={styles.image}
      />
      <View style={styles.body}>
        <CustomText style={styles.title}>{post.title}</CustomText>
        <CustomText style={styles.desc}>{post.description}</CustomText>
      </View>
    </Pressable>
  );
}
