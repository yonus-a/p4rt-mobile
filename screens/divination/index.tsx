import QuickPanel from "../../components/overal/quick-panel";
import Container from "../../components/overal/container";
import globalStyles from "../../styles/globalStyles";
import CustomText from "../../components/utils/text";
import Header from "../../components/overal/header";
import { View, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import fetchData from "./fetchData";
import styles from "./styles";

export default function Divination() {
  const [data, setData] = useState<any>({});

  useEffect(() => {
    fetchData(setData);
  }, []);

  return (
    <View style={styles.root}>
      <Header />
      <ScrollView style={styles.wrapper}>
        <Container style={styles.flexWrapper}>
          {data.hadis ? (
            <View>
              <CustomText style={[globalStyles.h2, styles.heading]}>
                {data.hadis.person} میفرمایید
              </CustomText>
              <CustomText>{data.hadis.text}</CustomText>
            </View>
          ) : (
            <CustomText>در حال بارگزاری...</CustomText>
          )}
          <View style={[globalStyles.hr, styles.seperator]}></View>
          {data.divination ? (
            <View>
              <CustomText style={[globalStyles.h2, styles.heading]}>
                فال امروز شما
              </CustomText>
              <CustomText style={styles.poem}>
                {data.divination?.poem}
              </CustomText>
              <CustomText style={[globalStyles.h2, styles.heading]}>
                تفسیر
              </CustomText>
              <CustomText style={styles.interpretation}>
                {data.divination?.interpretation}
              </CustomText>
            </View>
          ) : (
            <CustomText>در حال بارگزاری...</CustomText>
          )}
          <View style={[globalStyles.hr, styles.seperator]}></View>
          {data.fact ? (
            <View>
              <CustomText style={[globalStyles.h2, styles.heading]}>
                آیا میدانستید
              </CustomText>
              <CustomText>{data.hadis.text}</CustomText>
            </View>
          ) : (
            <CustomText>در حال بارگزاری...</CustomText>
          )}
        </Container>
      </ScrollView>
      <QuickPanel />
    </View>
  );
}
