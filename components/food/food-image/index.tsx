import errorAlert from "../../../utils/alert/error";
import useUserId from "../../../hooks/useUserId";
import { View, Image, Modal } from "react-native";
import CommentBtn from "../../utils/comment-btn";
import useClear from "../../../hooks/useClear";
import CloseBtn from "../../utils/close-btn";
import LikeBtn from "../../utils/like-btn";
import AddComment from "../add-comment";
import { useState } from "react";
import styles from "./styles";
import axios from "axios";

export default function FoodImage({ source, foodId, liked, likes }) {
  const [commentVisible, setCommentVisible] = useState(false);
  const [countLikes, setCountLikes] = useState(likes);
  const [isLiked, setIsLiked] = useState(liked);
  const userId = useUserId();

  return (
    <View style={styles.imageFood}>
      <Modal visible={commentVisible} transparent animationType="slide">
        <View style={styles.commentModal}>
          <CloseBtn
            onPress={() => setCommentVisible(false)}
            style={styles.closeBtn}
          />
          {/* <AddComment
            foodId={foodId}
            closeDialog={() => setCommentVisible(false)}
          /> */}
        </View>
      </Modal>
      <CommentBtn
        onPress={() => setCommentVisible(true)}
        style={styles.commentBtn}
      />
      <Image source={source} width={200} height={200} style={styles.image} />
    </View>
  );
}
