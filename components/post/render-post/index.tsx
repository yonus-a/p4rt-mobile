import { View, Image, useWindowDimensions } from "react-native";
import RenderHTML from "react-native-render-html";
import globalStyles from "../../../globalStyles";
import CustomText from "../../utils/text";
import PostComment from "../post-comment";
import PostLike from "../post-like";
import styles from "./styles";
import AddComment from "../add-comment";

export default function RenderPost({
  post,
  countAllSeen,
  countAllLike,
  comments,
}) {
  const { width } = useWindowDimensions();

  if (!post) return null;

  const source = {
    html: post.content,
  };

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
        <CustomText>تاریخ انتشار: {post.createdAt}</CustomText>
        <CustomText>تعداد بازدید: {countAllSeen}</CustomText>
      </View>
      <CustomText style={globalStyles.h1}>{post.title}</CustomText>
      <RenderHTML
        baseStyle={styles.content}
        contentWidth={width}
        source={source}
        tagsStyles={style}
      />
      <PostLike
        liked={post.post_like.length}
        likes={countAllLike}
        postId={post.id}
      />
      <PostComment comments={comments} />
      <AddComment />
    </View>
  );
}
