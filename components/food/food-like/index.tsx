import errorAlert from "../../../utils/alert/error";
import useUserId from "../../../hooks/useUserId";
import LikeBtn from "../../utils/like-btn";
import { useState } from "react";
import axios from "axios";

export default function FoodLike({ foodId, liked, likes }) {
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

  return <LikeBtn active={isLiked} count={countLikes} onPress={handleLike} />;
}
