import axios from "axios";

export default async function fetchData(setValue, id) {
  const { data } = await axios("/food/getFood", {
    params: {
      id,
    },
  });

  setValue("days", data.days.split(" | "));
  setValue("description", data.description);
  setValue("image", data.iamge);
  setValue("price", data.price);
  setValue("name", data.name);
}
