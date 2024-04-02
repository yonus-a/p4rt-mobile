import Container from "../../overal/container";
import { useEffect, useState } from "react";
import Chart from "../../overal/cahrt";
import fetchData from "./fetchData";
import styles from "./styles";

export default function WeeklyReport() {
  const [visits, setVisits] = useState([]);
  const [views, setViews] = useState([]);

  useEffect(() => {
    fetchData({
      setViews,
      setVisits,
    });
  }, []);

  return (
    <Container style={styles.weeklyReport}>
      <Chart data={views} label="بازدید" />
      <Chart data={visits} label="ورود" />
    </Container>
  );
}
