import { View, Image, useWindowDimensions } from "react-native";
import RenderHTML from "react-native-render-html";
import globalStyles from "../../../globalStyles";
import CustomText from "../../utils/text";
import PostComment from "../post-comment";
import AddComment from "../add-comment";
import PostLike from "../post-like";
import styles from "./styles";

export default function RenderPost({
  fetchNewComment,
  countAllSeen,
  countAllLike,
  comments,
  post,
}) {
  const { width } = useWindowDimensions();

  if (!post) return null;

  const style: any = {
    p: {
      fontSize: 18,
      display: "flex",
    },
  };

  return (
    <View style={styles.renderPost}>
      <Image
        source={{ uri: `https://p4rt.ir/public/images/${post.image}` }}
        style={styles.mainImage}
        height={width / 2}
        width={width}
      />
      <View style={styles.info}>
        <CustomText>
          تاریخ انتشار: {new Date(post.createdAt).toLocaleString()}
        </CustomText>
        <CustomText>تعداد بازدید: {countAllSeen}</CustomText>
      </View>
      <CustomText style={globalStyles.h1}>{post.title}</CustomText>
      <RenderHTML
        source={{ html: post.content }}
        baseStyle={styles.content}
        contentWidth={width}
        tagsStyles={style}
      />
      <PostLike
        liked={post.post_like.length}
        likes={countAllLike}
        postId={post.id}
      />
      <PostComment comments={comments} fetchNewComment={fetchNewComment} />
      <AddComment postId={post.id} fetchNewComment={fetchNewComment} />
    </View>
  );
}
