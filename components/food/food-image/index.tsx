import { setCommentVisible, setCountLikes, setIsLiked } from "./foodImageSlice";
import { useSelector, useDispatch } from "react-redux";
import errorAlert from "../../../utils/alert/error";
import useUserId from "../../../hooks/useUserId";
import { View, Image, Modal } from "react-native";
import CommentBtn from "../../utils/comment-btn";
import CloseBtn from "../../utils/close-btn";
import LikeBtn from "../../utils/like-btn";
import AddComment from "../add-comment";
import { useEffect } from "react";
import styles from "./styles";
import axios from "axios";

export default function FoodImage({
  fetchNewData,
  source,
  foodId,
  liked,
  likes,
}) {
  const { commentVisible, countLikes, isLiked } = useSelector(
    (state: any) => state.foodImage
  );
  const dispatch = useDispatch();
  const userId = useUserId();

  useEffect(() => {
    dispatch(setCountLikes(likes));
    dispatch(setIsLiked(liked));
  }, []);

  const handleLike = async () => {
    try {
      await axios.post("/food/addFoodLike", {
        foodId,
        userId,
      });

      dispatch(setIsLiked(!isLiked));
      dispatch(setCountLikes(isLiked ? countLikes - 1 : countLikes + 1));
    } catch (e) {
      await errorAlert();
    }
  };

  return (
    <View style={styles.imageFood}>
      <Modal visible={commentVisible} transparent animationType="slide">
        <View style={styles.commentModal}>
          <CloseBtn
            onPress={() => dispatch(setCommentVisible(false))}
            style={styles.closeBtn}
          />
          <AddComment
            foodId={foodId}
            fetchNewData={fetchNewData}
            closeDialog={() => dispatch(setCommentVisible(false))}
          />
        </View>
      </Modal>
      <CommentBtn
        onPress={() => dispatch(setCommentVisible(true))}
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
