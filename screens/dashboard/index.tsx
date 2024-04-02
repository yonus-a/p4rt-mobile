import AdminDashboard from "../../components/admin-dashboard";
import QuickPanel from "../../components/overal/quick-panel";
import UserDashboard from "../../components/user-dashboard";
import Header from "../../components/overal/header/indexx";
import useVefifyToken from "../../hooks/useVefiryToken";
import errorAlert from "../../utils/alert/error";
import useUserId from "../../hooks/useUserId";
import { useEffect, useState } from "react";
import { View } from "react-native";
import styles from "./styles";
import axios from "axios";

export default function Dashborad() {
  const [admin, setAdmin] = useState(false);
  const userId = useUserId();
  useVefifyToken();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios("/role/isAdmin", {
          params: { userId },
        });

        setAdmin(data.isAdmin);
      } catch (e) {
        await errorAlert();
      }
    })();
  }, []);

  return (
    <View style={styles.dashborad}>
      <Header />
      {admin ? <AdminDashboard /> : <UserDashboard />}
      <QuickPanel />
    </View>
  );
}
