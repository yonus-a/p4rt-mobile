import errorAlert from "../../../utils/alert/error";
import useUserId from "../../../hooks/useUserId";
import { View, Image, Modal } from "react-native";
import CommentBtn from "../../utils/comment-btn";
import CloseBtn from "../../utils/close-btn";
import LikeBtn from "../../utils/like-btn";
import AddComment from "../add-comment";
import { useState } from "react";
import styles from "./styles";
import axios from "axios";

export default function FoodImage({
  source,
  liked,
  likes,
  foodId,
  fetchNewData,
}) {
  const [commentVisible, setCommentVisible] = useState(false);
  const [countLikes, setCountLikes] = useState(likes);
  const [isLiked, setIsLiked] = useState(liked);
  const userId = useUserId();

  const handleLike = async () => {
    try {
      await axios.post("/food/addFoodLike", {
        foodId,
        userId,
      });
      setIsLiked(!isLiked);
      setCountLikes(isLiked ? countLikes - 1 : countLikes + 1);
    } catch (e) {
      await errorAlert();
    }
  };

  return (
    <View style={styles.imageFood}>
      <Modal visible={commentVisible} transparent animationType="slide">
        <View style={styles.commentModal}>
          <CloseBtn
            onPress={() => setCommentVisible(false)}
            style={styles.closeBtn}
          />
          <AddComment
            foodId={foodId}
            fetchNewData={fetchNewData}
            closeDialog={() => setCommentVisible(false)}
          />
        </View>
      </Modal>
      <CommentBtn
        onPress={() => setCommentVisible(true)}
        style={styles.commentBtn}
      />
      <Image source={source} width={200} height={200} style={styles.image} />
      <LikeBtn
        active={isLiked}
        count={countLikes}
        onPress={handleLike}
        style={styles.likeBtn}
      />
    </View>
  );
}
