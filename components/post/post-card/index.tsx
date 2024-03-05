import { Image, View } from "react-native";
import Navigate from "../../utils/navigate";
import CustomText from "../../utils/text";
import styles from "./styles";

interface Props {
  post: any;
}

export default function PostCard({ post }: Props) {
  return (
    <Navigate style={styles.card} to="post" params={{ id: post.id }}>
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
    </Navigate>
  );
}
