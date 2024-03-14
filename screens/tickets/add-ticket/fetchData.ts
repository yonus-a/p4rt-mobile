import axios from "axios";

export default function fetchData(setUnitOptions) {
  // const { data } = await axios("/ticket/getTicketTo");
  // const nextData = data.map(({ title, unitId }) => ({
  //   label: title,
  //   value: unitId,
  // }));

  // setUnitOptions(nextData);

  setUnitOptions([
    {
      label: "توسعه و رفاه",
      value: 8,
    },
  ]);
}
