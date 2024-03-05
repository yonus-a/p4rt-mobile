import errorAlert from "../../../utils/alert/error";
import LikeBtn from "../../utils/like-btn";
import { useState } from "react";
import addLike from "./addLike";

export default function PostLike({ likes, liked, postId }) {
  const [isLiked, setIsLiked] = useState(liked);
  const [countLikes, setCountLikes] = useState(likes);

  const handlePress = async () => {
    try {
      await addLike(postId);
      setIsLiked(!isLiked);
      setCountLikes(isLiked ? countLikes - 1 : countLikes + 1);
    } catch (e) {
      await errorAlert();
    }
  };

  return <LikeBtn count={countLikes} active={isLiked} onPress={handlePress} />;
}
