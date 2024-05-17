import PrimaryButton from "../../../components/utils/primary-button";
import FilePicker from "../../../components/utils/filePicker";
import Container from "../../../components/overal/container";
import Select from "../../../components/utils/select";
import Header from "../../../components/overal/header";
import Input from "../../../components/utils/input";
import { useForm } from "react-hook-form";
import { View } from "react-native";
import handleAdd from "./handleAdd";
import styles from "./styles";

const unitOptions = [
  {
    label: "توسعه و رفاه",
    value: 8,
  },
];

export default function AddTicket() {
  const { control, handleSubmit, setValue } = useForm();

  return (
    <View style={styles.addTicket}>
      <Header />
      <Container style={styles.wrapper}>
        <Select
          items={unitOptions}
          control={control}
          defaultValue={8}
          name="unitId"
        />
        <Input control={control} name="title" placeholder="موضوع" />
        <Input
          placeholder="متن درخواست"
          control={control}
          numberOfLines={6}
          name="message"
          multiline
        />
        <FilePicker setValue={setValue} name="attachment" />
        <PrimaryButton onPress={handleSubmit(handleAdd)} title="ثبت" />
      </Container>
    </View>
  );
}
