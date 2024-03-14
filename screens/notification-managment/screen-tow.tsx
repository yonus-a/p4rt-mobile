import { prioritiesOptions } from "../../utils/notification/priorities-options";
import SecondaryButton from "../../components/utils/secondary-button";
import PrimaryButton from "../../components/utils/primary-button";
import CustomCheckBox from "../../components/utils/checkbox";
import Container from "../../components/overal/container";
import Select from "../../components/utils/select";
import Input from "../../components/utils/input";
import { useForm } from "react-hook-form";
import handleSend from "./handleSend";

export default function ScreenTow({ carouselRef, users, everyone }) {
  const { control, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    handleSend({
      data: { ...data, everyone },
      receptors: users,
    });
  };

  return (
    <Container style={{ flex: 1, gap: 15 }}>
      <Select
        items={prioritiesOptions}
        control={control}
        defaultValue={1}
        name="priority"
      />
      <Input control={control} name="title" placeholder="عنواون" />
      <Input
        placeholder="پیام خود را وارد کنید..."
        control={control}
        numberOfLines={8}
        name="message"
        multiline
      />
      <CustomCheckBox control={control} name="sms_send" label="ارسال پیامک" />
      <PrimaryButton onPress={handleSubmit(onSubmit)} title="ارسال" />
      <SecondaryButton
        onPress={() => carouselRef.current.prev()}
        title="بازگشت"
      />
    </Container>
  );
}
