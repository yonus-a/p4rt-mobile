import { setData } from "./admin-report-slice";
import axios from "axios";

export default async function fetchData(dispatch) {
  const { data } = await axios("/dashboard/adminReports");
  dispatch(setData(data));
}
