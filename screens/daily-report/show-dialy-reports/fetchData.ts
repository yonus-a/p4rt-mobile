import axios from "axios";

export default async function fetchData({
  setData,
  page,
  take,
  date,
  search,
}) {
  const { data } = await axios("/daily-report/filterReports", {
    params: {
      search,
      date,
      page,
      take,
    },
  });

  setData(data);
}
