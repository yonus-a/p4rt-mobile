import { ScrollView, View } from "react-native";
import AdminReports from "./admin-reports";
import ReportTabs from "./report-taps";
import styles from "./styles";

export default function AdminDashboard() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.adminDashboard} alwaysBounceVertical>
        <AdminReports />
        <ReportTabs />
      </ScrollView>
    </View>
  );
}
