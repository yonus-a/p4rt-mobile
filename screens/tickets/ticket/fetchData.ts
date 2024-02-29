import axios from "axios";

export default async function fetchData(id, setData) {
  const { data } = await axios("/ticket/getTicket", {
    params: {
      id,
    },
  });

  setData(data);
}
