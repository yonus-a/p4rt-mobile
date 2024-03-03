import { setDay, getDay } from "date-fns-jalali";
import axios from "axios";

export default async function fetchData(setData, selectedDay) {
  const { data } = await axios("/food/getFoods", {
    params: {
      selectedDay,
    },
  });

  const startWeek = getDay(new Date()) >= 4 ? 4 : 5;
  const nextDate = setDay(new Date(), +selectedDay, {
    weekStartsOn: startWeek,
  });

  setData(
    data.map((item: any) => ({
      ...item,
      selectedDay: nextDate,
    }))
  );
}
