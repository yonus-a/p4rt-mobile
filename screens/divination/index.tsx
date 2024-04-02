import BreadcrumbHeader from "../../components/overal/breadcrumb-header";
import QuickPanel from "../../components/overal/quick-panel";
import Container from "../../components/overal/container";
import CustomText from "../../components/utils/text";
import * as SecureStore from "expo-secure-store";
import { View, ScrollView } from "react-native";
import globalStyles from "../../globalStyles";
import { useEffect, useState } from "react";
import fetchData from "./fetchData";
import styles from "./styles";

export default function Divination() {
  const fullName = SecureStore.getItem("fullName");
  const [data, setData] = useState<any>({});

  useEffect(() => {
    fetchData(setData);
  }, []);

  return (
    <View style={styles.root}>
      <BreadcrumbHeader />
      <ScrollView style={{ marginBottom: 80 }}>
        <Container>
          <CustomText style={globalStyles.h1}>
            فال امروز شما سرکار خانم/جناب آقای {fullName}
          </CustomText>
          <CustomText style={globalStyles.h2}>شعر</CustomText>
          <CustomText style={styles.poem}>{data.divination?.poem}</CustomText>
          <CustomText style={globalStyles.h2}>تفسیر</CustomText>
          <CustomText style={styles.interpretation}>
            {data.divination?.interpretation}
          </CustomText>
        </Container>
      </ScrollView>
      <QuickPanel />
    </View>
  );
}
