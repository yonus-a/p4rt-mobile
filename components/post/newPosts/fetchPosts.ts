import axios from "axios";

export default async function fetchPosts(setPosts, params) {
  const { data } = await axios("/posts/takeLastPostByCategory", {
    params,
  });

  setPosts(data);
}
