import axios from "axios";

export default async function fetchData({ setData, page, take }) {
  try {
    const { data } = await axios("/user/filterUsers", {
      params: {
        page,
        take,
      },
    });

    console.log(data);
  } catch (e) {}
}
