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
          color="#FFF5E3"
          icon={require("../../../assets/icons/employee.png")}
          iamgeStyle={{ width: 30, height: 30 }}
          desc="تعداد کارکنان"
          amountColor="#FCE8C5"
          to={"userManagment"}
        />
        <ReportCard
          amount={data.actives}
          color="#FFEBF6"
          icon={require("../../../assets/icons/active.png")}
          iamgeStyle={{ width: 35, height: 35 }}
          desc="کارمندان فعال"
          amountColor="#FFD7ED"
          to={"userManagment"}
        />
      </View>
      <View style={styles.wrapper}>
        <ReportCard
          amount={data.critics}
          color="#E4FFFA"
          icon={require("../../../assets/icons/critics.png")}
          iamgeStyle={{ width: 35, height: 35 }}
          amountColor="#C4F6ED"
          desc="گزارشات"
          to={critics}
        />
        <ReportCard
          amount={data.tickets}
          color="#FFE6E4"
          icon={require("../../../assets/icons/tickets.png")}
          iamgeStyle={{ width: 29, height: 29 }}
          amountColor="#FDD9D6"
          desc="درخواست ها"
          to={"showTickets"}
        />
      </View>
    </View>
  );
}
