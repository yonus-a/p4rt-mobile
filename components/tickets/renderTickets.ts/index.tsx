import verticalTable from "../../../styles/verticalTable";
import { View, Text, Pressable } from "react-native";
import Pagination from "../../utils/pagination";
import { useEffect, useState } from "react";
import ShowStatus from "../show-status";
import fetchData from "./fetchData";
import styles from "./styles";

export default function RenderTickets({ navigation }) {
  const [curPage, setCurPage] = useState(0);
  const [{ tickets, countTickets }, setData] = useState<any>({
    tickets: [],
    countTickets: 0,
  });

  useEffect(() => {
    fetchData(
      {
        page: curPage,
        take: 10,
      },
      setData
    );
  }, []);

  return (
    <View style={styles.renderTickets}>
      <View style={verticalTable.table}>
        {tickets.map((item) => (
          <Pressable
            style={verticalTable.row}
            onPress={() => navigation.navigate("ticket", { id: item.id })}
            key={item.id}
          >
            <View style={verticalTable.wrapper}>
              <Text style={verticalTable.header}>شماره درخواست</Text>
              <Text style={verticalTable.cell}>{item.id}</Text>
            </View>
            <View style={verticalTable.wrapper}>
              <Text style={verticalTable.header}>عنوان</Text>
              <Text style={verticalTable.cell}>{item.title}</Text>
            </View>
            <View style={verticalTable.wrapper}>
              <Text style={verticalTable.header}>وضعیت</Text>
              <Text style={verticalTable.cell}>
                <ShowStatus status={item.status} />
              </Text>
            </View>
          </Pressable>
        ))}
      </View>
      {/* <Pagination curPage={curPage} setCurPage={setCurPage} maxPage={10} /> */}
    </View>
  );
}
