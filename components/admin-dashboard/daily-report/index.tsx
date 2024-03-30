import { useDispatch, useSelector } from "react-redux";
import Container from "../../overal/container";
import DailyStats from "../../overal/cahrt";
import fetchData from "./fetchData";
import { useEffect } from "react";
import styles from "./styles";

export default function DailyReport() {
  const dispatch = useDispatch();
  const { views, visits } = useSelector((state: any) => state.dailyReport);

  useEffect(() => {
    fetchData(dispatch);
  }, []);

  return (
    <Container style={styles.dailyReport}>
      <DailyStats data={views} label="" />
      <DailyStats data={visits} label="ورود" />
    </Container>
  );
}
