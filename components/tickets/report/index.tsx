import { useEffect, useState } from "react";
import { View } from "react-native";
import AddBtn from "../../utils/add-btn";
import fetchData from "./fetchData";
import styles from "./styles";
import CustomText from "../../utils/text";

export default function TicketReport({ navigation }) {
  // const [data, setData] = useState<any>({});

  useEffect(() => {
    // fetchData(setData);
    // return () => setData({});
  }, []);

  return (
    <View style={styles.ticketReport}>
      {/* <CustomText style={styles.text}> درخواست های پاسخ داده نشده {data.openTickets}</CustomText> */}
      <CustomText style={styles.text}>تعداد درخواست ها: 1</CustomText>
      <AddBtn onPress={() => navigation.navigate("addTicket")} />
    </View>
  );
}
