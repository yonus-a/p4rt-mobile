import BreadcrumbHeader from "../../../components/overal/breadcrumb-header";
import Container from "../../../components/overal/container";
import PrimaryButton from "../../../components/utils/primary-button";
import Input from "../../../components/utils/input";
import errorAlert from "../../../utils/alert/error";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import addChatLine from "./addChatLine";
import fetchData from "./fetchData";
import ChatLine from "../chat-line";
import { View } from "react-native";
import styles from "./styles";

export default function Ticket({ route, navigation }) {
  const [data, setData] = useState<any>({});
  const { id } = route.params;

  useEffect(() => {
    fetchData(id, setData);
    return () => setData({});
  }, []);

  const { control, handleSubmit } = useForm();

  const onSubmit = async ({ message }) => {
    try {
      await addChatLine({
        message,
        chatId: data.chat[0].id,
      });
    } catch (e) {
      await errorAlert();
    }
  };

  return (
    <View style={styles.ticket}>
      <BreadcrumbHeader />
      <Container style={{ gap: 20 }}>
        <ChatLine message={data.message} attachment={""} />
        {/* <Input control={control} multiline numberOfLines={8} name="message" />
        PrimaryButton onPress={handleSubmit(onSubmit)} title="ثبت" /> */}
      </Container>
    </View>
  );
}
