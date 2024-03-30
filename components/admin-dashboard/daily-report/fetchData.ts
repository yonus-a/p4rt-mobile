import { setViews, setVisits } from "./dailyReportSlice";
import axios from "axios";

export default async function fetchData(dispatch) {
  const { data: visits } = await axios("/dashboard/getDailyVisits");
  const { data: views } = await axios("/dashboard/getDailyViews");
  dispatch(setVisits(visits));
  dispatch(setViews(views));
}
