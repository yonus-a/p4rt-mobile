import { View, Image, useWindowDimensions } from "react-native";
import globalStyles from "../../../globalStyles";
import CustomText from "../../utils/text";
import PostComment from "../post-comment";
import AddComment from "../add-comment";
import PostLike from "../post-like";
import styles from "./styles";
import RenderHtml, {
  HTMLContentModel,
  defaultHTMLElementModels,
} from "react-native-render-html";
import { Video, ResizeMode } from "expo-av";

const customHTMLElementModels = {
  img: defaultHTMLElementModels.img.extend({
    contentModel: HTMLContentModel.block,
  }),
  video: defaultHTMLElementModels.video.extend({
    contentModel: HTMLContentModel.block,
  }),
};

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

  const renderers = {
    img: (props) => {
      // console.log(props);
      return <CustomText>img</CustomText>;
    },
    video: (props) => {
      return props.tnode.domNode.children.map((item) => {
        if (item.name == "source") {
          return (
            <Video
              style={styles.video}
              source={{
                uri: `https://p4rt.ir/${item.attribs.src}`,
              }}
              useNativeControls
              resizeMode={ResizeMode.CONTAIN}
              isLooping
            />
          );
        }
      });
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
      <RenderHtml
        source={{
          html: post.content,
        }}
        baseStyle={styles.content}
        customHTMLElementModels={customHTMLElementModels}
        renderers={renderers}
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
