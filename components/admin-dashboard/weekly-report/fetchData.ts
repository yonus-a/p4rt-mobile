import { setViews, setVisits } from "./weeklyReportSlice";
import axios from "axios";

export default async function fetchData(dispatch) {
  const { data: visits } = await axios("/dashboard/getWeeklyVisits");
  const { data: views } = await axios("/dashboard/getWeeklyViews");
  dispatch(setVisits(visits));
  dispatch(setViews(views));
}
