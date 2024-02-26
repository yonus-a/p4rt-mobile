import axios from "axios";

export default async function fetchData(setVisits, setViews) {
  const { data: visits } = await axios("/dashboard/getWeeklyVisits");
  const { data: views } = await axios("/dashboard/getWeeklyViews");

  setViews(views);
  setVisits(visits);
}
