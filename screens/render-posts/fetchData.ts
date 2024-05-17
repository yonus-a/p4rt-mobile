import axios from "axios";

export default async function fetchData(setData, params) {
  const { data } = await axios("/posts/filterPosts", {
    params,
  });

  setData(data);
}
