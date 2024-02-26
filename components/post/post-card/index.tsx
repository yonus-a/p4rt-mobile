import { Pressable, Image, View, Text } from "react-native";
import styles from "./styles";

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
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.desc} >{post.description}</Text>
      </View>
    </Pressable>
  );
}
