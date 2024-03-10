import CustomCheckBox from "../../components/utils/checkbox";
import Container from "../../components/overal/container";
import Button from "../../components/utils/button";
import Select from "../../components/utils/select";
import Input from "../../components/utils/input";
import { useForm } from "react-hook-form";
import handleSend from "./handleSend";

const items = [
  {
    value: 1,
    label: "کم",
  },
  {
    value: 2,
    label: "بالا",
  },
  {
    value: 3,
    label: "متوسط",
  },
];

export default function ScreenTow({ carouselRef, users, everyone }) {
  const { control, handleSubmit } = useForm();

  const onSubmit = async ({ message }) => {
    const receptor = users.map(({ phone }) => phone);
  };

  return (
    <Container style={{ flex: 1, gap: 15 }}>
      <Select items={items} control={control} name="priority" />
      <Input control={control} name="title" placeholder="عنواون" />
      <Input
        placeholder="پیام خود را وارد کنید..."
        control={control}
        numberOfLines={8}
        name="mesage"
        multiline
      />
      <CustomCheckBox control={control} name="sms_send" label="ارسال پیامک" />
      <Button onPress={() => carouselRef.current.prev()} title="بازگشت" />
      <Button onPress={handleSend} title="ارسال" />
    </Container>
  );
}
