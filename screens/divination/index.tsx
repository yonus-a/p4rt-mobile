import Header from "../../components/overal/header/indexx";
import Container from "../../components/overal/container";
import * as SecureStore from "expo-secure-store";
import globalStyles from "../../globalStyles";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import styles from "./styles";
import axios from "axios";
import CustomText from "../../components/utils/text";
import QuickPanel from "../../components/overal/quick-panel";

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

    return () => {
      setData({});
    };
  }, []);

  const name = data.user?.firstname + " " + data.user?.lastname;

  return (
    <ScrollView style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <Container>
        <CustomText style={globalStyles.h1}>
          فال امروز شما سرکار خانم/جناب آقای {name}
        </CustomText>
        <CustomText style={globalStyles.h2}>شعر</CustomText>
        <CustomText style={styles.poem}>{data.divination?.poem}</CustomText>
        <CustomText style={globalStyles.h2}>تفسیر</CustomText>
        <CustomText style={styles.interpretation}>
          {data.divination?.interpretation}
        </CustomText>
      </Container>
      <QuickPanel />
    </ScrollView>
  );
}
