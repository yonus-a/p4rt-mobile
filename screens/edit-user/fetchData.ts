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

    setValue("positionId", user.positionId);
    setValue("education", user.education);
    setValue("firstname", user.firstname);
    setValue("education", user.education);
    setValue("birthday", user.birthday);
    setValue("lastname", user.lastname);
    setValue("unitId", user.unitId);
    setValue("phone", user.phone);
    setValue("photo", user.photo);
    setValue("photo", user.photo);
    setValue("id", user.id);

    const { data: position } = await axios("/user/getAllUserPositions");
    const { data: units } = await axios("/user/getUnits");

    setUnits(units);
    setPositions(position);
  } catch (e) {
    await errorAlert();
  }
}
