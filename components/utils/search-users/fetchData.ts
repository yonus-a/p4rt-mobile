import axios from "axios";

export default async function fetchData({ setUsers, search }) {
  const { data } = await axios("/user/searchUsers", {
    params: {
      search,
    },
  });

  setUsers(data);
}
