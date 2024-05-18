import quickAccessStyle from "../../overal/quick-access/styles";
import successAlert from "../../../utils/alert/success";
import PressableIcon from "../../utils/pressable-icon";
import errorAlert from "../../../utils/alert/error";
import useUserId from "../../../hooks/useUserId";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AddAbsentee({ onPress }) {
  const [present, setPresent] = useState<any>({});
  const userId = useUserId();

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios("/absentee/isPresentTody", {
          params: {
            userId,
          },
        });

        setPresent(data);
      } catch (e) {
        await errorAlert();
      }
    }

    fetchData();
  }, []);

  const handlePress = async () => {
    try {
      await axios.post("/absentee/addAbsentee", {
        userId,
      });

      onPress();
      await successAlert({
        msg: "ورود شما با موفقیت ثبت شد",
      });
    } catch (e) {
      await errorAlert();
    }
  };

  return (
    <>
      {present.userId ? (
        <PressableIcon
          srouce={require("../../../assets/icons/absentee-active.png")}
          iconStyle={quickAccessStyle.icon}
          onPress={() => {}}
          alt="done"
        />
      ) : (
        <PressableIcon
          srouce={require("../../../assets/icons/circle-done.png")}
          iconStyle={quickAccessStyle.icon}
          onPress={handlePress}
          alt="done"
        />
      )}
    </>
  );
}
