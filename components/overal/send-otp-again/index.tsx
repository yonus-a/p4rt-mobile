import get30SecondsLater from "../../../utils/date/get30SecondsLater";
import errorAlert from "../../../utils/alert/error";
import { getHash } from "react-native-otp-verify";
import { Pressable, View } from "react-native";
import { useTimer } from "react-timer-hook";
import CustomText from "../../utils/text";
import { useState } from "react";
import styles from "./styles";
import axios from "axios";

export default function SendOTPAgain({ code }) {
  const [showAgain, setShowAgain] = useState(false);

  const { seconds, restart } = useTimer({
    expiryTimestamp: get30SecondsLater(),
    onExpire: handleExpire,
  });

  function handleExpire() {
    setShowAgain(true);
  }

  const handleSendAgain = async () => {
    try {
      const hash = await getHash();
      await axios.post("/signin/generateMobileOTP", { code, hash: hash[0] });
      restart(get30SecondsLater());
      setShowAgain(false);
    } catch (e) {
      await errorAlert();
    }
  };

  return (
    <View style={styles.sendOTPAgain}>
      <CustomText style={[styles.timer]}>{seconds}</CustomText>
      <Pressable onPress={handleSendAgain} disabled={!showAgain} style={{}}>
        <CustomText style={!showAgain ? { color: "#ccc" } : { color: "#000" }}>
          ارسال مجدد
        </CustomText>
      </Pressable>
    </View>
  );
}
