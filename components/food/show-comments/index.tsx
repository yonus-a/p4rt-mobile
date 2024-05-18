import ShowComments from "../../utils/show-comments";
import errorAlert from "../../../utils/alert/error";
import useUserId from "../../../hooks/useUserId";
import axios from "axios";

export default function ShowFoodComments({ comments }) {
  const userId = useUserId();

  const handleDelete = async (commentId) => {
    try {
      await axios.post("/food/deleteFoodComment", {
        commentId,
        userId,
      });
    } catch (e) {
      await errorAlert();
    }
  };

  const nextComments = comments.map(({text, ...others}) => (others.message = text, others)) 

  return <ShowComments comments={nextComments} handleDelete={handleDelete} />
  
}
