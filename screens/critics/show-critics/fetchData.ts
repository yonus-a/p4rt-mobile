import axios from "axios";

export default async function fetchData(
  setCritics: any,
  page: number,
  take: number
) {
  const { data } = await axios("/critics/getCritics", {
    params: {
      page,
      take,
    },
  });

  setCritics(data);
}
