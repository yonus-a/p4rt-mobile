import { useEffect, useState } from "react";
import Chart from "../../overal/cahrt";
import { View } from "react-native";
import fetchData from "./fetchData";
import styles from "./styles";

export default function WeeklyReport() {
  const [visits, setVisits] = useState();
  const [views, setViews] = useState();

  useEffect(() => {
    fetchData(setVisits, setViews);
  }, []);

  return (
    <View style={styles.weeklyReport}>
      <Chart data={views} label="بازدید" />
      <Chart data={visits} label="ورود" />
    </View>
  );
}
