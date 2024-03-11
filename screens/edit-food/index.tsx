import BreadcrumbHeader from "../../components/overal/breadcrumb-header";
import CustomMultiSelect from "../../components/utils/multi-select";
import FilePicker from "../../components/utils/filePicker";
import Container from "../../components/overal/container";
import { daysItems } from "../../utils/select/daysItem";
import Button from "../../components/utils/button";
import Input from "../../components/utils/input";
import { useForm } from "react-hook-form";
import fetchData from "./fetchData";
import { View } from "react-native";
import editFood from "./editFood";
import { useEffect } from "react";
import styles from "./styles";

export default function EditFood({ route }) {
  const { control, handleSubmit, setValue } = useForm();
  const { id } = route.params;

  useEffect(() => {
    fetchData(setValue, id);
  }, []);

  const onSubmit = (data) => {
    editFood(id, data);
  };

  return (
    <View style={styles.addFood}>
      <BreadcrumbHeader />
      <Container style={{ gap: 15 }}>
        <Input control={control} name="name" placeholder="نام" />
        <Input control={control} name="price" placeholder="قیمت" />
        <Input
          control={control}
          name="description"
          placeholder="توضیحات"
          numberOfLines={8}
          multiline
        />
        <FilePicker setValue={setValue} name="image" />
        <CustomMultiSelect items={daysItems} control={control} name="days" />
        <Button onPress={handleSubmit(onSubmit)} title="ثبت" />
      </Container>
    </View>
  );
}
