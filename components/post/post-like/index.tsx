import errorAlert from "../../../utils/alert/error";
import LikeBtn from "../../utils/like-btn";
import addLike from "./addLike";

export default function PostLike({ likes, liked, postId }) {
  const handlePress = async () => {
    try {
      await addLike(postId);
    } catch (e) {
      await errorAlert();
    }
  };

  return <LikeBtn count={likes} active={liked} onPress={handlePress} />;
}
