import PrimaryButton from "../../../components/utils/primary-button";
import Container from "../../../components/overal/container";
import Menu from "../../../components/overal/quick-panel";
import CustomText from "../../../components/utils/text";
import successAlert from "../../../utils/alert/success";
import Header from "../../../components/overal/header";
import Select from "../../../components/utils/select";
import errorAlert from "../../../utils/alert/error";
import Input from "../../../components/utils/input";
import ShowCiriticsAnswers from "../../../components/critics/show-ciritics-answers";
import * as SecureStore from "expo-secure-store";
import useUserId from "../../../hooks/useUserId";
import { ScrollView, View } from "react-native";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./styles";
import axios from "axios";

export default function AddCritics() {
  const { control, handleSubmit } = useForm();
  const [fullName, setFullName] = useState("");
  const userId = useUserId();

  const onSubmit = async (data) => {
    try {
      await axios.post("/critics/addCritis", { ...data, userId });
      await successAlert({
        msg: "پیام شما با موفقیت ثبت شد",
      });
    } catch (e) {
      await errorAlert();
    }
  };

  useEffect(() => {
    (async () => {
      const name = await SecureStore.getItemAsync("fullName");
      setFullName(name);
    })();
  }, []);

  const items = [
    {
      label: "ناشناس",
      value: "0",
    },
    {
      label: fullName,
      value: fullName,
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView style={styles.addCritics}>
        <Container>
          <View style={styles.wrapper}>
            <Select
              control={control}
              defaultValue={"0"}
              items={items}
              name="name"
            />
            <CustomText>
              درصورتی که نام خود را وارد نکنید پیام شما به صورت ناشناس ارسال
              خواهد شد
            </CustomText>
            <Input
              placeholder="پیام خود را وارد کنید..."
              control={control}
              numberOfLines={5}
              name="msg"
              multiline
            />
            <PrimaryButton onPress={handleSubmit(onSubmit)} title="ثبت" />
          </View>
          <ShowCiriticsAnswers />
        </Container>
      </ScrollView>
      <Menu />
    </View>
  );
}
