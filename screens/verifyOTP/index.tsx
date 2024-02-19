import { View, ImageBackground, Image } from "react-native";
import SmsRetriever from "react-native-sms-retriever";
import errorAlert from "../../utils/alert/error";
import * as SecureStore from "expo-secure-store";
import Button from "../../components/button";
import Input from "../../components/input";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import styles from "./styles";
import axios from "axios";

export default function VerifyOTP({ route, navigation }: any) {
  const { control, handleSubmit, setValue } = useForm();
  const { code } = route.params;

  useEffect(() => {
    (async () => {
      SmsRetriever.addSmsListener((sms) => {});
    })();
  }, []);

  const onSubmit = async ({ otp }) => {
    try {
      const { data } = await axios.post(
        "http://10.0.2.2:3000/api/signin/verifyOTP",
        {
          code,
          otp,
        }
      );

      await SecureStore.setItemAsync("_token", data.token);
      navigation.navigate("dashboard");
    } catch (e) {
      await errorAlert();
    }
  };

  return (
    <View style={styles.signin}>
      <ImageBackground
        source={require("../../assets/images/overal/map.png")}
        style={styles.bg}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <Image
            source={require("../../assets/images/overal/logo.png")}
            alt="سامانه داخلی پارت"
            style={styles.logo}
            height={200}
            width={200}
          />
          <Input
            style={styles.input}
            placeholder="کد ورود"
            control={control}
            name="otp"
          />
          <Button title="ورود" onPress={handleSubmit(onSubmit)} />
        </View>
      </ImageBackground>
    </View>
  );
}
