import ShowComments from "../../utils/show-comments";
import deleteComment from "./deleteComment";

export default function PostComment({ comments, fetchNewComment }) {
  const handleDelete = (id) => {
    deleteComment(id, fetchNewComment);
  };

  return <ShowComments comments={comments} handleDelete={handleDelete} />;
}
