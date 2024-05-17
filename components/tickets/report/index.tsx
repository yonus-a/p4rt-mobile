import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import CustomText from "../../utils/text";
import AddBtn from "../../utils/add-btn";
import { View } from "react-native";
import fetchData from "./fetchData";
import styles from "./styles";

export default function TicketReport() {
  const [data, setData] = useState<any>(0);
  const navigation: any = useNavigation();

  useEffect(() => {
    fetchData(setData);
  }, []);

  return (
    <View style={styles.ticketReport}>
      <CustomText>تعداد درخواست ها: {data}</CustomText>
      <AddBtn onPress={() => navigation.navigate("addTicket")} />
    </View>
  );
}
