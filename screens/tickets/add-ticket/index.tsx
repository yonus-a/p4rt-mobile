import BreadcrumbHeader from "../../../components/overal/breadcrumb-header";
import PrimaryButton from "../../../components/utils/primary-button";
import Container from "../../../components/overal/container";
import successAlert from "../../../utils/alert/success";
import Select from "../../../components/utils/select";
import Input from "../../../components/utils/input";
import errorAlert from "../../../utils/alert/error";
import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { View } from "react-native";
import fetchData from "./fetchData";
import styles from "./styles";
import axios from "axios";

export default function AddTicket() {
  const { control, handleSubmit, setValue } = useForm();
  const [unitOptions, setUnitOptions] = useState<any>();

  useEffect(() => {
    setUnitOptions([
      {
        label: "توسعه و رفاه",
        value: 8,
      },
    ]);
  }, []);

  const onSubmit = async (data) => {
    try {
      const userId = await SecureStore.getItemAsync("userId");
      await axios.post("/ticket/addTicket", {
        title: data.title,
        message: data.message,
        unitId: data.unitId,
        file: data.filename,
        userId,
      });

      await successAlert({
        msg: "درخواست شما با موفقیت ثبت شد",
      });
    } catch (e) {
      console.log(e);
      await errorAlert();
    }
  };

  return (
    <View style={styles.addTicket}>
      <BreadcrumbHeader />
      <Container style={styles.wrapper}>
        <Select items={unitOptions} control={control} name="unitId" />
        <Input control={control} name="title" placeholder="موضوع" />
        <Input
          placeholder="متن درخواست"
          control={control}
          numberOfLines={6}
          name="message"
          multiline
        />
        {/* <FilePicker setValue={setValue} /> */}
        <PrimaryButton onPress={handleSubmit(onSubmit)} title="ثبت" />
      </Container>
    </View>
  );
}
