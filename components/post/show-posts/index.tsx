import CustomText from "../../utils/text";
import { View } from "react-native";
import PostCard from "../post-card";
import styles from "./styles";

interface Props {
  posts: any;
}

export default function ShowPosts({ posts }: Props) {
  return (
    <View style={styles.showPosts}>
      {posts.length ? (
        <View style={styles.wrapper}>
          {posts?.map((post: any) => (
            <PostCard post={post} key={post.id} style={styles.card} />
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
