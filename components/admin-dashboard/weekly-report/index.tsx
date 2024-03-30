import { useDispatch, useSelector } from "react-redux";
import Container from "../../overal/container";
import Chart from "../../overal/cahrt";
import fetchData from "./fetchData";
import { useEffect } from "react";
import styles from "./styles";

export default function WeeklyReport() {
  const dispatch = useDispatch();
  const { views, visits } = useSelector((state: any) => state.weeklyReport);

  useEffect(() => {
    fetchData(dispatch);
  }, []);

  return (
    <Container style={styles.weeklyReport}>
      <Chart data={views} label="بازدید" />
      <Chart data={visits} label="ورود" />
    </Container>
  );
}
