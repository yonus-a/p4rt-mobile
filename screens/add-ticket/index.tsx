import BreadcrumbHeader from "../../components/overal/breadcrumb-header";
import FilePicker from "../../components/utils/filePicker";
import Container from "../../components/overal/container";
import Select from "../../components/utils/select";
import Button from "../../components/utils/button";
import Input from "../../components/utils/input";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { View } from "react-native";
import fetchData from "./fetchData";
import styles from "./styles";

export default function AddTicket({ navigation }) {
  const { control, handleSubmit, setValue } = useForm();
  const [unitOptions, setUnitOptions] = useState();

  useEffect(() => {
    fetchData(setUnitOptions);
  }, []);

  const onSubmit = () => {};

  return (
    <View style={styles.addTicket}>
      <BreadcrumbHeader navigation={navigation} />
      <Container style={styles.wrapper}>
        <Select items={unitOptions} control={control} name="unit" />
        <Input control={control} name="topic" placeholder="موضوع" />
        <Input
          placeholder="متن درخواست"
          control={control}
          numberOfLines={6}
          name="topic"
          multiline
        />
        <FilePicker setValue={setValue} />
        <Button onPress={handleSubmit(onSubmit)} title="ثبت" />
      </Container>
    </View>
  );
}
