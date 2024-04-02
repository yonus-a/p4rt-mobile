import axios from "axios";

export default async function fetchData(setData) {
  try {
    const { data } = await axios.get("/dashboard/getSlides");
    setData(data);
  } catch (e) {}
}
