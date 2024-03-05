import axios from "axios";

export default async function fetchComments(setComments, { id }) {
  const { data: comments } = await axios("/posts/getComments", {
    params: {
      id,
    },
  });

  setComments(comments);
}
