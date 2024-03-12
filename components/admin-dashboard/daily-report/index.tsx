import Container from "../../overal/container";
import DailyStats from "../../overal/cahrt";
import { useEffect, useState } from "react";
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
    <Container style={styles.dailyReport}>
      <DailyStats data={views} label="بازدید" />
      <DailyStats data={visits} label="ورود" />
    </Container>
  );
}
