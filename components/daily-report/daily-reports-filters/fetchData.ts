import axios from "axios";

export default async function fetchData(setData) {
  const { data } = await axios.get("/user/getUnits");
  setData(data);
}
