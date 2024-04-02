import DailyReportFilters from "../../../components/daily-report/daily-reports-filters";
import BreadcrumbHeader from "../../../components/overal/breadcrumb-header";
import RenderReports from "../../../components/daily-report/render-reports";
import CountReports from "../../../components/daily-report/count-reports";
import Container from "../../../components/overal/container";
import { useFocusEffect } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { View } from "react-native";
import fetchData from "./fetchData";
import styles from "./styles";

const initialData = {
  totalReports: 0,
  countReports: {
    countSuspension: 0,
    countLeave: 0,
    countOff: 0,
  },
  reports: [],
};

export default function ShowDailyReport() {
  const take = 10;
  const [data, setData] = useState(initialData);
  const [date, setDate] = useState(new Date());
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);

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
        <DailyReportFilters setSearch={setSearch} setDate={setDate} />
        <CountReports data={data.countReports} />
        {!!data.reports.length && (
          <RenderReports
            setPage={setPage}
            data={data}
            take={take}
            page={page}
          />
        )}
      </Container>
    </View>
  );
}
