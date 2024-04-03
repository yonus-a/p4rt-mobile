import BreadcrumbHeader from "../../../components/overal/breadcrumb-header";
import PrimaryButton from "../../../components/utils/primary-button";
import Container from "../../../components/overal/container";
import Input from "../../../components/utils/input";
import { FlatList, View } from "react-native";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import addChatLine from "./addChatLine";
import fetchData from "./fetchData";
import ChatLine from "../chat-line";
import styles from "./styles";

export default function Ticket({ route }) {
  const { control, handleSubmit, reset } = useForm();
  const [fetchNewData, setFetchNewData] = useState({});
  const [ticket, setTicket] = useState<any>({});
  const { id } = route.params;

  useEffect(() => {
    fetchData(id, setTicket);
  }, [fetchNewData]);

  const onSubmit = (data) => {
    addChatLine({ ...data, chatId: ticket.chat[0].id });
    setFetchNewData({});
    reset();
  };

  const chats = [ticket, ...(ticket.chat?.[0]?.chat_line || [])];

  return (
    <View style={styles.ticket}>
      <BreadcrumbHeader />
      <Container style={{ gap: 20 }}>
        <FlatList
          data={chats}
          contentContainerStyle={{ gap: 20 }}
          renderItem={({ item }) => (
            <ChatLine message={item.message} attachment={""} key={item.id} />
          )}
        />
        <Input
          placeholder="متن خود را وارد کنید..."
          control={control}
          numberOfLines={8}
          name="message"
          multiline
        />
        <PrimaryButton title="ثبت" onPress={handleSubmit(onSubmit)} />
      </Container>
    </View>
  );
}
