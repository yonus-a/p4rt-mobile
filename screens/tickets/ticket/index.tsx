import BreadcrumbHeader from "../../../components/overal/breadcrumb-header";
import Container from "../../../components/overal/container";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import fetchData from "./fetchData";
import styles from "./styles";
import ChatLine from "../chat-line";
import Input from "../../../components/utils/input";
import { useForm } from "react-hook-form";
import Button from "../../../components/utils/button";

export default function Ticket({ route, navigation }) {
  const { id } = route.params;
  const [data, setData] = useState<any>({});

  useEffect(() => {
    fetchData(id, setData);
  }, []);

  const { control, handleSubmit } = useForm();

  return (
    <View style={styles.ticket}>
      <BreadcrumbHeader navigation={navigation} />
      <Container>
        <ChatLine message={data.message} attachment={""} />
        <Input control={control} multiline numberOfLines={8} name="msg" />
        <Button onPress={() => {}} title="ثبت" />
      </Container>
    </View>
  );
}
