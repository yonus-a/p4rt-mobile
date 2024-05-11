import { View, Image, useWindowDimensions } from "react-native";
import PrimaryButton from "../../components/utils/primary-button";
import CustomText from "../../components/utils/text";
import Input from "../../components/utils/input";
import { useForm } from "react-hook-form";
import handleLogin from "./handleLogin";
import { useState } from "react";
import styles from "./styles";

export default function Login({ navigation }: any) {
  const [disabled, setDisabled] = useState(false);
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    handleLogin({
      setDisabled,
      navigation,
      data,
    });
  };

  return (
    <View style={styles.login}>
      <Image
        source={require("../../assets/images/overal/login.png")}
        style={styles.image}
        alt=""
      />
      <View style={styles.flexWrapper}>
        <CustomText style={styles.text}>
          برای ورود کد ملی خود را وارد کنید
        </CustomText>
        <Input
          keyboardType="number-pad"
          placeholder="کد ملی..."
          control={control}
          name="code"
        />
        <PrimaryButton
          onPress={handleSubmit(onSubmit)}
          disabled={disabled}
          style={styles.btn}
          title="ارسال"
        />
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
