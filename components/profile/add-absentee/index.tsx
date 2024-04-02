import PrimaryButtonIcon from "../../utils/button-icon";
import successAlert from "../../../utils/alert/success";
import errorAlert from "../../../utils/alert/error";
import useUserId from "../../../hooks/useUserId";
import axios from "axios";

export default function AddAbsentee() {
  const userId = useUserId();

  const handlePress = async (e) => {
    e.stopPropagation();

    try {
      await axios.post("/absentee/addAbsentee", {
        userId,
      });

      await successAlert({
        msg: "ورود شما با موفقیت ثبت شد",
      });
    } catch (e) {
      await errorAlert();
    }
  };

  return (
    <PrimaryButtonIcon
      source={require("../../../assets/icons/done.png")}
      onPress={handlePress}
      height={50}
      width={50}
      alt=""
    />
  );
}
