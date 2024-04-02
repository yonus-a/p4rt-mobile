import verticalTable from "../../../styles/verticalTable";
import { useEffect, useState } from "react";
import { View, Pressable } from "react-native";
import Pagination from "../../utils/pagination";
import CustomText from "../../utils/text";
import ShowStatus from "../show-status";
import fetchData from "./fetchData";
import styles from "./styles";

export default function RenderTickets({ navigation }) {
  const [curPage, setCurPage] = useState(0);
  const defaultValue = {
    tickets: [],
    countTickets: 0,
  };

  const [{ tickets, countTickets }, setData] = useState<any>(defaultValue);

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
              <CustomText style={verticalTable.header}>
                شماره درخواست
              </CustomText>
              <CustomText style={verticalTable.cell}>{item.id}</CustomText>
            </View>
            <View style={verticalTable.wrapper}>
              <CustomText style={verticalTable.header}>عنوان</CustomText>
              <CustomText style={verticalTable.cell}>{item.title}</CustomText>
            </View>
            <View style={verticalTable.wrapper}>
              <CustomText style={verticalTable.header}>وضعیت</CustomText>
              <CustomText style={verticalTable.cell}>
                <ShowStatus status={item.status} />
              </CustomText>
            </View>
          </Pressable>
        ))}
      </View>
      {/* <Pagination curPage={curPage} setCurPage={setCurPage} maxPage={10} /> */}
    </View>
  );
}
