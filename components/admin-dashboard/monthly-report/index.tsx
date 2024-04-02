import Container from "../../overal/container";
import { useEffect, useState } from "react";
import Chart from "../../overal/cahrt";
import fetchData from "./fetchData";
import styles from "./styles";

export default function MonthlyReport() {
  const [views, setViews] = useState([]);
  const [visits, setVisits] = useState([]);

  useEffect(() => {
    fetchData({
      setViews,
      setVisits,
    });
  }, []);

  return (
    <Container style={styles.monthlyReport}>
      <Chart data={views} label="بازدید" />
      <Chart data={visits} label="ورود" />
    </Container>
  );
}
