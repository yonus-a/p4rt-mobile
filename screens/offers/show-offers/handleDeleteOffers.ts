import errorAlert from "../../../utils/alert/error";
import axios from "axios";

export default async function handleDeleteOffers(
  id: number,
  setOffers: any,
  offers: any
) {
  try {
    await axios.post("/offers/deleteOffers", {
      id,
    });

    setOffers({
      ...offers,
      data: offers.data.filter((item) => item.id !== id),
    });
  } catch (e) {
    await errorAlert();
  }
}
