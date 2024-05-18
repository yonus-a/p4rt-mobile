import BreadcrumbHeader from "../../components/overal/breadcrumb";
import CustomMultiSelect from "../../components/utils/multi-select";
import PrimaryButton from "../../components/utils/primary-button";
import FilePicker from "../../components/utils/filePicker";
import Container from "../../components/overal/container";
import { daysItems } from "../../utils/select/daysItem";
import Input from "../../components/utils/input";
import { useForm } from "react-hook-form";
import fetchData from "./fetchData";
import { View } from "react-native";
import editFood from "./editFood";
import { useEffect } from "react";
import styles from "./styles";
import Header from "../../components/overal/header";

export default function EditFood({ route, navigation }) {
  const { control, handleSubmit, setValue } = useForm();
  const { id } = route.params;

  useEffect(() => {
    fetchData(setValue, id);
  }, []);

  const onSubmit = (data) => {
    editFood(id, data, navigation);
  };

  return (
    <View style={styles.addFood}>
      <Header />
      <Container style={{ gap: 15 }}>
        <Input control={control} name="food.name" placeholder="نام" />
        <Input control={control} name="food.price" placeholder="قیمت" />
        <Input
          control={control}
          name="food.description"
          placeholder="توضیحات"
          numberOfLines={8}
          multiline
        />
        <FilePicker setValue={setValue} name="image" />
        <CustomMultiSelect
          items={daysItems}
          control={control}
          name="food.days"
        />
        <PrimaryButton onPress={handleSubmit(onSubmit)} title="ثبت" />
      </Container>
    </View>
  );
}
