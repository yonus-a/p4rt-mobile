import axios from "axios";

export default async function fetchData(setValue, id) {
  const { data } = await axios("/food/getFood", {
    params: {
      id,
    },
  });

  setValue("food.days", data.days.split(" | "));
  setValue("food.description", data.description);
  setValue("food.price", data.price);
  setValue("food.name", data.name);
  setValue("image", data.iamge);
}
