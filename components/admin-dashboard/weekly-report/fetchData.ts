import axios from "axios";

export default async function fetchData({ setViews, setVisits }) {
  const { data: visits } = await axios("/dashboard/getWeeklyVisits");
  const { data: views } = await axios("/dashboard/getWeeklyViews");

  setVisits(visits);
  setViews(views);
}
