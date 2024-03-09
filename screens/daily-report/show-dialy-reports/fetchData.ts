import axios from "axios";

export default async function fetchData({ setData, page, take, date, search }) {
  const { data } = await axios("/daily-report/filterReports", {
    params: {
      search,
      page,
      take,
      date,
    },
  });
  console.log(data);
  setData(data);
}
