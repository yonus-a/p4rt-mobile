import { useDispatch, useSelector } from "react-redux";
import Container from "../../overal/container";
import Chart from "../../overal/cahrt";
import fetchData from "./fetchData";
import { useEffect } from "react";
import styles from "./styles";

export default function MonthlyReport() {
  const dispatch = useDispatch();
  const { views, visits } = useSelector((state: any) => state.monthlyReport);

  useEffect(() => {
    fetchData(dispatch);
  }, []);

  return (
    <Container style={styles.monthlyReport}>
      <Chart data={views} label="بازدید" />
      <Chart data={visits} label="ورود" />
    </Container>
  );
}
