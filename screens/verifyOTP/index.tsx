import SendOTPAgain from "../../components/overal/send-otp-again";
import { CLR_PRIMARY, CLR_WHITE } from "../../globalStyles";
import { startOtpListener } from "react-native-otp-verify";
import CustomText from "../../components/utils/text";
import OTPTextView from "react-native-otp-textinput";
import { View, Image } from "react-native";
import handleVerify from "./handleVerify";
import { useEffect, useRef } from "react";
import styles from "./styles";

export default function VerifyOTP({ route, navigation }: any) {
  let otpInput = useRef(null);
  const { code } = route.params;

  const handleChange = (value) => {
    handleVerify({ code, value, navigation });
  };

  useEffect(() => {
    startOtpListener((message) => {
      const otp = /(\d{4})/g.exec(message)[1];
      otpInput.current.setValue(otp);
    });
  }, []);

  return (
    <View style={styles.login}>
      <Image
        source={require("../../assets/images/overal/login.png")}
        style={styles.image}
        alt=""
      />
      <View style={styles.flexWrapper}>
        <CustomText style={styles.text}>کد ارسال شده را وارد نمایید</CustomText>
        <OTPTextView
          containerStyle={styles.inputWrapper}
          handleTextChange={handleChange}
          textInputStyle={styles.input}
          offTintColor={CLR_WHITE}
          tintColor={CLR_PRIMARY}
          ref={otpInput}
        />
        <SendOTPAgain code={code} />
      </View>
      <View style={styles.logoWrapper}>
        <CustomText style={styles.logoText}>سامانه داخلی ستاد پارت</CustomText>
        <Image
          source={require("../../assets/images/overal/logo.png")}
          alt="سامانه داخلی پارت"
          style={styles.logo}
        />
      </View>
    </View>
  );
}
