import BreadcrumbHeader from "../../components/overal/breadcrumb-header";
import CustomMultiSelect from "../../components/utils/multi-select";
import PrimaryButton from "../../components/utils/primary-button";
import FilePicker from "../../components/utils/filePicker";
import Container from "../../components/overal/container";
import { daysItems } from "../../utils/select/daysItem";
import Input from "../../components/utils/input";
import { useForm } from "react-hook-form";
import { View } from "react-native";
import handleAdd from "./handleAdd";
import styles from "./styles";

export default function AddFood() {
  const { control, handleSubmit, setValue } = useForm();

  const onSubmit = (data) => {
    console.log(data.iamge);
    handleAdd(data);
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
        <CustomMultiSelect
          items={daysItems}
          control={control}
          name="days"
          title="روز"
        />
        <PrimaryButton onPress={handleSubmit(onSubmit)} title="ثبت" />
      </Container>
    </View>
  );
}
