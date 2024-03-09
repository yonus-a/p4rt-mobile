import DailyReportFilters from "../../../components/daily-report/daily-reports-filters";
import BreadcrumbHeader from "../../../components/overal/breadcrumb-header";
import RenderReports from "../../../components/daily-report/render-reports";
import Container from "../../../components/overal/container";
import { useState, useEffect } from "react";
import { View } from "react-native";
import fetchData from "./fetchData";
import styles from "./styles";

export default function ShowDailyReport() {
  const take = 10;
  const [date, setDate] = useState(new Date());
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [data, setData] = useState({
    totalReports: 0,
    reports: [],
  });

  useEffect(() => {
    fetchData({
      setData,
      page,
      take,
      date,
      search,
    });
  }, [page, date, search]);

  return (
    <View style={styles.dailyReport}>
      <BreadcrumbHeader />
      <Container>
        <DailyReportFilters setDate={setDate} setSearch={setSearch} />
        <RenderReports
          data={data.reports}
          maxPage={Math.floor(data.totalReports / take) || 1}
          setCurPage={setPage}
          curPage={page}
        />
      </Container>
    </View>
  );
}
