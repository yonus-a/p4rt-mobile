import DailyStats from "../../overal/cahrt";
import { useEffect, useState } from "react";
import { View } from "react-native";
import fetchData from "./fetchData";
import styles from "./styles";

export default function DailyReport() {
  const [visits, setVisits] = useState();
  const [views, setViews] = useState();

  useEffect(() => {
    fetchData(setVisits, setViews);
  }, []);

  return (
    <View style={styles.dailyReport}>
      <DailyStats data={views} label="بازدید" />
      <DailyStats data={visits} label="ورود" />
    </View>
  );
}
