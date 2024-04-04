import axios from "axios";

export default async function fetchData({
  setData,
  page,
  take,
  date,
  search,
  type,
  group,
  date1,
  date2,
}) {
  const { data } = await axios("/daily-report/filterReports", {
    params: {
      search,
      date,
      page,
      take,
      type,
      group,
      date1,
      date2,
    },
  });

  setData(data);
}
