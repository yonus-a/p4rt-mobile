import DailyStats from "../../overal/cahrt";
import { useEffect, useState } from "react";
import { View } from "react-native";
import fetchData from "./fetchData";
import styles from "./styles";

export default function DailyReport() {
  const [visits, setVisits] = useState<any>();
  const [views, setViews] = useState<any>();

  useEffect(() => {
    fetchData(setVisits, setViews);

    return () => {
      setVisits({});
      setViews({});
    };
  }, []);

  return (
    <View style={styles.dailyReport}>
      <DailyStats data={views} label="بازدید" />
      <DailyStats data={visits} label="ورود" />
    </View>
  );
}
