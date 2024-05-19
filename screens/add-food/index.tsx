import CustomMultiSelect from "../../components/utils/multi-select";
import PrimaryButton from "../../components/utils/primary-button";
import FilePicker from "../../components/utils/filePicker";
import Container from "../../components/overal/container";
import { daysItems } from "../../utils/select/daysItem";
import Header from "../../components/overal/header";
import Input from "../../components/utils/input";
import { useForm } from "react-hook-form";
import { View } from "react-native";
import handleAdd from "./handleAdd";
import styles from "./styles";
import Menu from "../../components/overal/quick-panel";

export default function AddFood({ navigation }) {
  const { control, handleSubmit, setValue } = useForm();

  const onSubmit = (data) => {
    handleAdd(data, navigation);
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
          title="روز"
        />
        <PrimaryButton onPress={handleSubmit(onSubmit)} title="ثبت" />
      </Container>
      <Menu />
    </View>
  );
}
