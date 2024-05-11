import get30SecondsLater from "../../../utils/date/get30SecondsLater";
import { Pressable, View } from "react-native";
import { useTimer } from "react-timer-hook";
import CustomText from "../../utils/text";
import { useState } from "react";
import styles from "./styles";

export default function SendOTPAgain() {
  const [showAgain, setShowAgain] = useState(false);

  const { seconds, restart } = useTimer({
    expiryTimestamp: get30SecondsLater(),
    onExpire: handleExpire,
  });

  function handleExpire() {
    setShowAgain(true);
  }

  const handleSendAgain = () => {};

  return (
    <View style={styles.sendOTPAgain}>
      <CustomText style={styles.timer}>{seconds}</CustomText>
      <Pressable onPress={handleSendAgain} disabled={!showAgain} style={{}}>
        <CustomText>ارسال محدد</CustomText>
      </Pressable>
    </View>
  );
}
