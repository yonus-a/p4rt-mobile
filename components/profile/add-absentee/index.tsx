import ButtonIcon from "../../utils/button-icon";
import axios from "axios";

export default function AddAbsentee() {
  const handlePress = async (e) => {
    e.stopPropagation();

    try {
      // await axios.post("/absentee/addAbsentee");
      console.log("ok");
    } catch (e) {}
  };

  return (
    <ButtonIcon
      source={require("../../../assets/icons/done.png")}
      onPress={handlePress}
      height={50}
      width={50}
      alt=""
    />
  );
}
