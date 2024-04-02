import axios from "axios";

export default async function fetchData({ setViews, setVisits }) {
  const { data: visits } = await axios("/dashboard/getMonthlyVisits");
  const { data: views } = await axios("/dashboard/getMonthlyViews");

  setVisits(visits);
  setViews(views);
}
