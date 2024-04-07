import { startOtpListener } from "react-native-otp-verify";
import { LinearGradient } from "expo-linear-gradient";
import CustomText from "../../components/utils/text";
import OTPTextView from "react-native-otp-textinput";
import errorAlert from "../../utils/alert/error";
import * as SecureStore from "expo-secure-store";
import { View, Image } from "react-native";
import { useEffect, useRef } from "react";
import styles from "./styles";
import axios from "axios";

export default function VerifyOTP({ route, navigation }: any) {
  let otpInput = useRef(null);
  const { code } = route.params;

  const handleChange = async (value) => {
    if (value.length === 4) {
      try {
        const { data } = await axios.post("/signin/verifyOTP", {
          code,
          otp: value,
        });

        const { data: user } = await axios("user/getUser", {
          params: {
            id: code,
          },
        });

        await SecureStore.setItemAsync("_token", data.token);
        await SecureStore.setItemAsync("userId", code);
        await SecureStore.setItemAsync("profile", user.photo);
        await SecureStore.setItemAsync(
          "fullName",
          user.firstname + " " + user.lastname
        );
        navigation.navigate("dashboard");
      } catch (e) {
        await errorAlert();
      }
    }
  };

  useEffect(() => {
    startOtpListener((message) => {
      // extract the otp using regex e.g. the below regex extracts 4 digit otp from message
      const otp = /(\d{4})/g.exec(message)[1];
      otpInput.current.setValue(otp);
    });
  }, []);

  return (
    <LinearGradient colors={["#ffffff", "#e3e3e3"]} style={{ flex: 1 }}>
      <View style={styles.signin}>
        <View style={styles.container}>
          <Image
            source={require("../../assets/images/overal/logo1.png")}
            alt="سامانه داخلی پارت"
            style={styles.logo}
            resizeMode="contain"
          />
          <View style={styles.form}>
            <CustomText>کد ورود را وارد کنید</CustomText>
            <OTPTextView handleTextChange={handleChange} ref={otpInput} />
          </View>
          <Image
            source={require("../../assets/images/overal/text-logo.png")}
            resizeMode="contain"
            style={styles.textIcon}
          />
        </View>
      </View>
    </LinearGradient>
  );
}
