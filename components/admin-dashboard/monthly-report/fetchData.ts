import axios from "axios";

export default async function fetchData(setVisits, setViews) {
  const { data: visits } = await axios("/dashboard/getMonthlyVisits");
  const { data: views } = await axios("/dashboard/getMonthlyViews");

  setViews(views);
  setVisits(visits);
}
