import { Pressable, Image, View } from "react-native";
import "./styles.scss";

interface Props {
  posts: any;
}

export default function ShowPostsClient({ posts }: Props) {
  return (
    <View style={styles.ShowPosts} aria-label="posts">
      {posts.length ? (
        <View style="grid-wrapper">
          {posts?.map(({ id, title, image, description }: any) => (
            <Pressable style="post-card" key={id}>
              <Image
                source={{ uri: `https://p4rt.ir/public/images/${image}` }}
                alt={title}
                width={300}
                height={300}
              />
              <View style="body">
                <View>{title}</View>
                <View>{description}</View>
              </View>
            </Pressable>
          ))}
        </View>
      ) : (
        <View style="empty">محتوایی برای نمایش وجود ندارد</View>
      )}
    </View>
  );
}
