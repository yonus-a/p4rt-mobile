import axios from "axios";

export default async function fetchData(setUnits, setPositions) {
  const { data: position } = await axios("/user/getAllUserPositions");
  const { data: units } = await axios("/user/getUnits");

  setUnits(units);
  setPositions(position);
}
