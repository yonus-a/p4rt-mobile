import Container from "../../overal/container";
import { useEffect, useState } from "react";
import DailyStats from "../../overal/cahrt";
import fetchData from "./fetchData";
import styles from "./styles";

export default function DailyReport() {
  const [views, setViews] = useState([]);
  const [visits, setVisits] = useState([]);

  useEffect(() => {
    fetchData({
      setViews,
      setVisits,
    });
  }, []);

  return (
    <Container style={styles.dailyReport}>
      <DailyStats data={views} label="" />
      <DailyStats data={visits} label="ورود" />
    </Container>
  );
}
