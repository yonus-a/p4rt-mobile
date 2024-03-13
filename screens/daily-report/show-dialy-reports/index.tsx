import DailyReportFilters from "../../../components/daily-report/daily-reports-filters";
import BreadcrumbHeader from "../../../components/overal/breadcrumb-header";
import RenderReports from "../../../components/daily-report/render-reports";
import CountReports from "../../../components/daily-report/count-reports";
import Container from "../../../components/overal/container";
import { useState, useEffect } from "react";
import { View } from "react-native";
import fetchData from "./fetchData";
import styles from "./styles";

export default function ShowDailyReport() {
  const take = 10;
  const [date, setDate] = useState(new Date());
  const [search, setSearch] = useState("");
  const [type, setType] = useState(null);
  const [unit, setUnit] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [page, setPage] = useState(0);
  const [data, setData] = useState({
    totalReports: 0,
    countReports: {
      countSuspension: 0,
      countLeave: 0,
      countOff: 0,
    },
    reports: [],
  });

  useEffect(() => {
    fetchData({
      setData,
      page,
      take,
      date,
      search,
      type,
    });
  }, [page, date, search, type]);

  return (
    <View style={styles.dailyReport}>
      <BreadcrumbHeader />
      <Container>
        <DailyReportFilters
          setSearch={setSearch}
          setStart={setStartDate}
          setDate={setDate}
          setType={setType}
          setEnd={setEndDate}
          setUnit={setUnit}
        />
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
