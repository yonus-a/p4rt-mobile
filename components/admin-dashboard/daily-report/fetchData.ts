import axios from "axios";

export default async function fetchData({ setViews, setVisits }) {
  const { data: visits } = await axios("/dashboard/getDailyVisits");
  const { data: views } = await axios("/dashboard/getDailyViews");

  setVisits(visits);
  setViews(views);
}
