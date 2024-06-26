import PrimaryButton from "../../components/utils/primary-button";
import Container from "../../components/overal/container";
import CustomText from "../../components/utils/text";
import Input from "../../components/utils/input";
import { Shadow } from "react-native-shadow-2";
import { useForm } from "react-hook-form";
import { Pressable } from "react-native";
import handleSend from "./handleSend";
import useClear from "../../hooks/useClear";

export default function ScreenTow({ carouselRef, users }) {
  const { control, handleSubmit, reset } = useForm();

  useClear(() => {
    reset();
  });

  const onSubmit = async ({ message }) => {
    const receptor = users.map(({ phone }) => phone);
    handleSend({ message, receptor });
  };

  return (
    <Container style={{ flex: 1, gap: 15 }}>
      <Shadow style={{ width: "100%", borderRadius: 10 }} distance={5}>
        <Input control={control} numberOfLines={8} name="message" multiline />
      </Shadow>
      <PrimaryButton onPress={handleSubmit(onSubmit)} title="ارسال" />
      <Pressable
        onPress={() => carouselRef.current.prev()}
        style={{
          backgroundColor: "#eee",
          borderRadius: 10,
          width: "100%",
          padding: 15,
        }}
      >
        <CustomText style={{ textAlign: "center" }}>بازگشت</CustomText>
      </Pressable>
    </Container>
  );
}
