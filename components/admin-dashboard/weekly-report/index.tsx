import Container from "../../overal/container";
import { useEffect, useState } from "react";
import Chart from "../../overal/cahrt";
import fetchData from "./fetchData";
import styles from "./styles";

export default function WeeklyReport() {
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
    <Container style={styles.weeklyReport}>
      <Chart data={views} label="بازدید" />
      <Chart data={visits} label="ورود" />
    </Container>
  );
}
