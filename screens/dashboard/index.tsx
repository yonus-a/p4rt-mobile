import AdminDashboard from "../../components/admin-dashboard";
import QuickPanel from "../../components/overal/quick-panel";
import UserDashboard from "../../components/user-dashboard";
import Header from "../../components/overal/header/indexx";
import { View } from "react-native";
import styles from "./styles";

export default function Dashborad({ navigation }: any) {
  return (
    <View style={styles.dashborad}>
      <Header navigation={navigation} />
      <UserDashboard />
      {/* <AdminDashboard /> */}
      <QuickPanel />
    </View>
  );
}
