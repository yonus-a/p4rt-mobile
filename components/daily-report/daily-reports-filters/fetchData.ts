import optionsGenerator from "../../../utils/select/optionsGenerator";
import axios from "axios";

export default async function fetchData(setData) {
  const { data } = await axios("/user/getUnits");
  const items = optionsGenerator(data);
  setData(items);
}
