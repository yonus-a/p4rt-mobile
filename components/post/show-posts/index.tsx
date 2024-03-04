import { Pressable, Image, View } from "react-native";
import styles from "./styles";
import PostCard from "../post-card";
import CustomText from "../../utils/text";

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
          <CustomText>محتوایی برای نمایش وجود ندارد</CustomText>
        </View>
      )}
    </View>
  );
}
