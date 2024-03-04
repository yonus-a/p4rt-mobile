import BreadcrumbHeader from "../../../components/overal/breadcrumb-header";
import Container from "../../../components/overal/container";
import { ScrollView, View } from "react-native";
import successAlert from "../../../utils/alert/success";
import Select from "../../../components/utils/select";
import Button from "../../../components/utils/button";
import Alert from "../../../components/overal/alert";
import errorAlert from "../../../utils/alert/error";
import Input from "../../../components/utils/input";
import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./styles";
import axios from "axios";
import CustomText from "../../../components/utils/text";

export default function AddCritics({ navigation }: any) {
  const { control, handleSubmit } = useForm();
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      await axios.post("/critics/addCritis", data);
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
  });

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
    <ScrollView style={styles.addCritics}>
      <BreadcrumbHeader navigation={navigation} />
      <Container>
        <View style={styles.wrapper}>
          <Select
            control={control}
            defaultValue={"0"}
            items={items}
            name="name"
          />
          <CustomText style={styles.text}>
            درصورتی که نام خود را وارد نکنید پیام شما به صورت ناشناس ارسال خواهد
            شد
          </CustomText>
          <Input
            placeholder="پیام خود را وارد کنید..."
            control={control}
            numberOfLines={5}
            name="msg"
            multiline
          />
          <Button onPress={handleSubmit(onSubmit)} title="ثبت" />
        </View>
      </Container>
      <Alert />
    </ScrollView>
  );
}
