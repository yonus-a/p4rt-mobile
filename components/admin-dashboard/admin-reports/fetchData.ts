import axios from "axios";

export default async function fetchData(setData: any) {
  const { data } = await axios("/dashboard/adminReports");
  setData(data);
}
