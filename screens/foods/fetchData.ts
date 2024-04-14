import axios from "axios";

export default async function fetchData(setData, selectedDay) {
  const { data } = await axios("/food/getFoods", {
    params: {
      selectedDay,
    },
  });

  setData(
    data.map((item: any) => ({
      ...item,
      selectedDay: selectedDay,
    }))
  );
}
