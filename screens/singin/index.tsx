import { View, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CustomText from "../../components/utils/text";
import Alert from "../../components/overal/alert";
import errorAlert from "../../utils/alert/error";
import * as SecureStore from "expo-secure-store";
import Input from "../../components/utils/input";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./styles";
import axios from "axios";

export default function Signin({ navigation }: any) {
  const [disabled, setDisabled] = useState(false);
  const { control, handleSubmit, setValue } = useForm();

  const onSubmit = async (data) => {
    setDisabled(true);

    try {
      await axios.post("/signin/generateOTP", data);
      navigation.navigate("verifyOTP", data);
      setDisabled(false);
      setValue("code", "");
    } catch (e) {
      console.log(e);
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
            <Pressable
              onPress={handleSubmit(onSubmit)}
              style={styles.btn}
              disabled={disabled}
            >
              {!disabled ? (
                <CustomText style={{ textAlign: "center" }}>ورود</CustomText>
              ) : (
                <CustomText style={{ textAlign: "center" }}>
                  در حال پردازش...
                </CustomText>
              )}
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
