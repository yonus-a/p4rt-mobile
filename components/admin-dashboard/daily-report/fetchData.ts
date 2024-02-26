import axios from "axios";

export default async function fetchData(setVisits, setViews) {
  const { data: visits } = await axios("/dashboard/getDailyVisits");
  const { data: views } = await axios("/dashboard/getDailyViews");

  setViews(views);
  setVisits(visits);
}
