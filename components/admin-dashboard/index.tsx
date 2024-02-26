import AdminReports from "./admin-reports";
import ReportTabs from "./report-taps";
import { View } from "react-native";
import styles from "./styles";

export default function AdminDashboard() {
  return (
    <View style={styles.adminDashboard}>
      <AdminReports />
      <ReportTabs />
    </View>
  );
}
