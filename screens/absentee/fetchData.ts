import moment from "jalali-moment";
import axios from "axios";

export default async function getAbsentee({ date, search, setData }) {
  const nextDate = moment.from(date, "fa", "YYYY/MM/DD");
  const { data } = await axios("/absentee/filterAbsentee", {
    params: {
      date: nextDate,
      search,
    },
  });

  setData(data);
}
