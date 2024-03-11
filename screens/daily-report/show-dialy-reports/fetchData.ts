import moment from "jalali-moment";
import axios from "axios";

export default async function fetchData({ setData, page, take, date, search }) {
  const nextDate = moment.from(date, "fa", "YYYY/MM/DD");
  const { data } = await axios("/daily-report/filterReports", {
    params: {
      date: nextDate,
      search,
      page,
      take,
    },
  });
  setData(data);
}
