import Header from "../../components/overal/header/indexx";
import Container from "../../components/overal/container";
import * as SecureStore from "expo-secure-store";
import globalStyles from "../../globalStyles";
import { useEffect, useState } from "react";
import { Text, ScrollView } from "react-native";
import styles from "./styles";
import axios from "axios";

export default function Divination({ navigation }: any) {
  const [data, setData] = useState<any>({});

  async function fetchData() {
    const userId = await SecureStore.getItemAsync("userId");
    const { data: date } = await axios.get("/general/getDate");

    const { data } = await axios.get("/divination/getDivinationSeen", {
      params: {
        userId,
        date,
      },
    });

    setData(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const name = data.user?.firstname + " " + data.user?.lastname;

  return (
    <ScrollView style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <Container>
        <Text style={globalStyles.h1}>
          فال امروز شما سرکار خانم/جناب آقای {name}
        </Text>
        <Text style={globalStyles.h2}>شعر</Text>
        <Text style={styles.poem}>{data.divination?.poem}</Text>
        <Text style={globalStyles.h2}>تفسیر</Text>
        <Text style={styles.interpretation}>
          {data.divination?.interpretation}
        </Text>
      </Container>
    </ScrollView>
  );
}
