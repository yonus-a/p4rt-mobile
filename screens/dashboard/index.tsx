import QuickPanel from "../../components/overal/quick-panel";
import { Suspense, lazy, useEffect, useState } from "react";
import Header from "../../components/overal/header/indexx";
import useVefifyToken from "../../hooks/useVefiryToken";
import errorAlert from "../../utils/alert/error";
import useUserId from "../../hooks/useUserId";
import { View } from "react-native";
import styles from "./styles";
import axios from "axios";

const AdminDashboard = lazy(() => import("../../components/admin-dashboard"));
const UserDashboard = lazy(() => import("../../components/user-dashboard"));

export default function Dashborad() {
  const [admin, setAdmin] = useState(false);
  const userId = useUserId();
  useVefifyToken();

  useEffect(() => {
    (async () => {
      try {
        if (userId) {
          const { data } = await axios("/role/isAdmin", {
            params: { userId },
          });

          setAdmin(data.isAdmin);
        }
      } catch (e) {
        await errorAlert();
      }
    })();
  }, []);

  return (
    <View style={styles.dashborad}>
      {userId && (
        <>
          <Header />
          <Suspense>{admin ? <AdminDashboard /> : <UserDashboard />}</Suspense>
          <QuickPanel />
        </>
      )}
    </View>
  );
}
