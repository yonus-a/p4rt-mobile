import axios from "axios";

export default async function fetchData(setData) {
  const { data } = await axios("/food/getAllFoods");
  setData(data);
}
