import axios from "axios";

export default async function getAbsentee({ date, search, setData }) {
  const { data } = await axios("/absentee/filterAbsentee", {
    params: {
      date,
      search,
    },
  });

  setData(data);
}
