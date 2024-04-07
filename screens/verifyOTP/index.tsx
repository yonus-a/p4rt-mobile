import { View, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CustomText from "../../components/utils/text";
import errorAlert from "../../utils/alert/error";
import * as SecureStore from "expo-secure-store";
import Input from "../../components/utils/input";
import useClear from "../../hooks/useClear";
import { useForm } from "react-hook-form";
import styles from "./styles";
import axios from "axios";

export default function VerifyOTP({ route, navigation }: any) {
  const { control, handleSubmit, setValue, reset } = useForm();
  const { code } = route.params;

  useClear(() => {
    reset();
  });
  
  const onSubmit = async ({ otp }) => {
    try {
      const { data } = await axios.post("/signin/verifyOTP", {
        code,
        otp,
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
      setValue("otp", "");
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
            <CustomText>کد ورود را وارد کنید</CustomText>
            <Input style={styles.input} control={control} name="otp" />
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
      </View>
    </LinearGradient>
  );
}
