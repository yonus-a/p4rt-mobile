import useUserId from "../../../hooks/useUserId";
import { useEffect, useState } from "react";
import ReportCard from "../report-card";
import fetchData from "./fetchData";
import { View } from "react-native";
import styles from "./styles";

export default function AdminReports() {
  const userId = useUserId();
  const isManager = userId === "4060588326";
  const critics = isManager ? "showCritics" : "critics";

  const [data, setData] = useState<any>({
    users: 0,
    actives: 0,
    critics: 0,
    tickets: 0,
  });

  useEffect(() => {
    fetchData(setData);
  }, []);

  return (
    <View style={styles.reports}>
      <View style={styles.wrapper}>
        <ReportCard
          amount={data.users}
          color="#00D6BA"
          desc="تعداد کارکنان"
          to={"userManagment"}
        />
        <ReportCard
          amount={data.actives}
          color="#FEBC04"
          desc="کارمندان فعال"
          to={"userManagment"}
        />
      </View>
      <View style={styles.wrapper}>
        <ReportCard
          amount={data.critics}
          color="#FE612C"
          desc="گزارشات"
          to={critics}
        />
        <ReportCard
          amount={data.tickets}
          color="#46B5FD"
          desc="درخواست ها"
          to={"showTickets"}
        />
      </View>
    </View>
  );
}
