import { View, ImageBackground, Image } from "react-native";
import Button from "../../components/utils/button";
import Alert from "../../components/overal/alert";
import errorAlert from "../../utils/alert/error";
import * as SecureStore from "expo-secure-store";
import Input from "../../components/utils/input";
import { useForm } from "react-hook-form";
import styles from "./styles";
import axios from "axios";

export default function VerifyOTP({ route, navigation }: any) {
  const { control, handleSubmit } = useForm();
  const { code } = route.params;

  const onSubmit = async ({ otp }) => {
    try {
      const { data } = await axios.post("/signin/verifyOTP", {
        code,
        otp,
      });

      await SecureStore.setItemAsync("_token", data.token);
      await SecureStore.setItemAsync("userId", code);
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
      <Alert />
    </View>
  );
}
