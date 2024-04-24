import axios from "axios";

export default async function fetchData(
  setOffers: any,
  page: number,
  take: number
) {
  const { data } = await axios("/offers/getOffers", {
    params: {
      page,
      take,
    },
  });

  setOffers(data);
}
