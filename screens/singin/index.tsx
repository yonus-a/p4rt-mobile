import { View, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CustomText from "../../components/utils/text";
import Alert from "../../components/overal/alert";
import errorAlert from "../../utils/alert/error";
import * as SecureStore from "expo-secure-store";
import Input from "../../components/utils/input";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import styles from "./styles";
import axios from "axios";

export default function Signin({ navigation }: any) {
  // check for token

  useEffect(() => {
    (async () => {
      const token = await SecureStore.getItemAsync("_token");

      if (token) {
        const { data } = await axios.post("/signin/vefifyToken", { token });

        if (data.success) {
          navigation.navigate("dashboard");
        }
      }
    })();
  }, []);

  const { control, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("/signin/generateOTP", data);
      navigation.navigate("verifyOTP", data);
    } catch (e) {
      await errorAlert();
    }
  };

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
            <CustomText>کد ملی خود را وارد کنید</CustomText>
            <Input style={styles.input} control={control} name="code" />
            <Pressable onPress={handleSubmit(onSubmit)} style={styles.btn}>
              <CustomText style={{ textAlign: "center" }}>ورود</CustomText>
            </Pressable>
          </View>
          <Image
            source={require("../../assets/images/overal/text-logo.png")}
            resizeMode="contain"
            style={styles.textIcon}
          />
        </View>
        <Alert />
      </View>
    </LinearGradient>
  );
}
