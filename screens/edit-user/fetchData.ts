import errorAlert from "../../utils/alert/error";
import axios from "axios";

export default async function fetchData({
  setPositions,
  setUnits,
  setValue,
  id,
}) {
  try {
    const { data: user } = await axios("/user/getUser", {
      params: {
        id,
      },
    });

    setValue("user.positionId", user.positionId);
    setValue("user.education", user.education);
    setValue("user.firstname", user.firstname);
    setValue("user.education", user.education);
    setValue("user.birthday", user.birthday);
    setValue("user.lastname", user.lastname);
    setValue("user.unitId", user.unitId);
    setValue("user.phone", user.phone);
    setValue("photo", user.photo);
    setValue("user.id", user.id);

    const { data: position } = await axios("/user/getAllUserPositions");
    const { data: units } = await axios("/user/getUnits");

    setUnits(units);
    setPositions(position);
  } catch (e) {
    await errorAlert();
  }
}
