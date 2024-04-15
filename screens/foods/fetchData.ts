import axios from "axios";

export default async function fetchData(setData, selectedDay) {
  const { data } = await axios("/food/getFoods", {
    params: {
      selectedDay: selectedDay.getDay(),
    },
  });

  setData(
    data.map((item: any) => ({
      ...item,
      selectedDay: selectedDay,
    }))
  );
}
