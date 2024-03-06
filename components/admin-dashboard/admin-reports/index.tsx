import { useEffect, useState } from "react";
import ReportCard from "../report-card";
import fetchData from "./fetchData";
import { View } from "react-native";
import styles from "./styles";

export default function AdminReports() {
  const defaultValue = {
    users: 0,
    actives: 0,
    critics: 0,
    tickets: 0,
  };

  const [data, setData] = useState<any>(defaultValue);

  useEffect(() => {
    fetchData(setData);

    return () => setData(defaultValue);
  }, []);

  return (
    <View style={styles.reports}>
      <ReportCard
        amount={data.users}
        color="#FFF5E3"
        icon={require("../../../assets/icons/employee.png")}
        desc="تعداد کارکنان"
        amountColor="#FCE8C5"
      />
      <ReportCard
        amount={data.actives}
        color="#FFEBF6"
        icon={require("../../../assets/icons/active.png")}
        desc="کارمندان فعال"
        amountColor="#FFD7ED"
      />
      <ReportCard
        amount={data.critics}
        color="#E4FFFA"
        icon={require("../../../assets/icons/critics.png")}
        desc="انتقادات"
        amountColor="#C4F6ED"
      />
      <ReportCard
        amount={data.tickets}
        color="#FFE6E4"
        icon={require("../../../assets/icons/tickets.png")}
        desc="درخواست ها"
        amountColor="#FDD9D6"
      />
    </View>
  );
}
