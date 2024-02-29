import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import AddBtn from "../../utils/add-btn";
import fetchData from "./fetchData";
import styles from "./styles";

export default function TicketReport({ navigation }) {
  const [data, setData] = useState<any>({});

  useEffect(() => {
    fetchData(setData);
  }, []);

  return (
    <View style={styles.ticketReport}>
      {/* <Text style={styles.text}> درخواست های پاسخ داده نشده {data.openTickets}</Text> */}
      <Text style={styles.text}> تعداد درخواست ها: {data.tickets}</Text>
      <AddBtn onPress={() => navigation.navigate("addTicket")} />
    </View>
  );
}
