import PrimaryButtonIcon from "../../utils/button-icon";
import successAlert from "../../../utils/alert/success";
import errorAlert from "../../../utils/alert/error";
import useUserId from "../../../hooks/useUserId";
import { useEffect, useState } from "react";
import { View } from "react-native";
import axios from "axios";

export default function AddAbsentee() {
  const userId = useUserId();

  const [present, setPresent] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios("/absentee/isPresentTody", {
        params: {
          userId,
        },
      });

      setPresent(data);
    }

    fetchData();
  }, []);

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
    <View>
      {present ? (
        <PrimaryButtonIcon
          source={require("../../../assets/icons/absentee-active.png")}
          onPress={() => {}}
          height={50}
          width={50}
          alt=""
        />
      ) : (
        <PrimaryButtonIcon
          source={require("../../../assets/icons/done.png")}
          onPress={handlePress}
          height={50}
          width={50}
          alt=""
        />
      )}
    </View>
  );
}
