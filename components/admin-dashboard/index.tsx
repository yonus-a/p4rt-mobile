import Container from "../overal/container";
import AdminReports from "./admin-reports";
import { ScrollView } from "react-native";
import ReportTabs from "./report-taps";
import styles from "./styles";

export default function AdminDashboard() {
  return (
    <ScrollView  showsVerticalScrollIndicator={false}>
      <Container style={styles.wrapper}>
        <AdminReports />
        <ReportTabs />
      </Container>
    </ScrollView>
  );
}
