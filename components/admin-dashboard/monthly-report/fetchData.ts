import { setViews, setVisits } from "./monthlyReportSlice";
import axios from "axios";

export default async function fetchData(dispatch) {
  const { data: visits } = await axios("/dashboard/getMonthlyVisits");
  const { data: views } = await axios("/dashboard/getMonthlyViews");
  dispatch(setVisits(visits));
  dispatch(setViews(views));
}
