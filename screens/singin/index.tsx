import { View, ImageBackground, Image } from "react-native";
import errorAlert from "../../utils/alert/error";
import * as SecureStore from "expo-secure-store";
import Button from "../../components/button";
import Input from "../../components/input";
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
        const { data } = await axios.post(
          "http://10.0.2.2:3000/api/signin/vefifyToken",
          { token }
        );
        
        console.log(data);
        if (data.success) {
          navigation.navigate("dashboard");
        }
      }
    })();
  }, []);

  const { control, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("http://10.0.2.2:3000/api/signin/generateOTP", data);
      navigation.navigate("verifyOTP", data);
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
            placeholder="کد ملی"
            control={control}
            name="code"
          />
          <Button title="ورود" onPress={handleSubmit(onSubmit)} />
        </View>
      </ImageBackground>
    </View>
  );
}
