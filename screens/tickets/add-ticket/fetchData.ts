import axios from "axios";

export default async function fetchData(setUnitOptions) {
  // const { data } = await axios("/ticket/getTicketTo");
  // const nextData = data.map(({ title, unitId }) => ({
  //   label: title,
  //   value: unitId,
  // }));

  setUnitOptions([
    {
      label: "توسعه و رفاه",
      value: 8,
    },
  ]);
}
