import { Pressable, Image, View, Text } from "react-native";
import styles from "./styles";
import PostCard from "../post-card";

interface Props {
  posts: any;
}

export default function ShowPosts({ posts }: Props) {
  return (
    <View style={styles.showPosts} aria-label="posts">
      {posts.length ? (
        <View style={styles.wrapper}>
          {posts?.map((post: any) => (
            <PostCard post={post} key={post.id} />
          ))}
        </View>
      ) : (
        <View style={styles.empty}>
          <Text>محتوایی برای نمایش وجود ندارد</Text>
        </View>
      )}
    </View>
  );
}
