import { View, BackHandler, ToastAndroid } from "react-native";
import QuickPanel from "../../components/overal/quick-panel";
import { requestPermissionsAsync } from "expo-notifications";
import { Suspense, lazy, useEffect, useState } from "react";
import Header from "../../components/overal/header/indexx";
import useVefifyToken from "../../hooks/useVefiryToken";
import errorAlert from "../../utils/alert/error";
import useUserId from "../../hooks/useUserId";
import styles from "./styles";
import axios from "axios";

const AdminDashboard = lazy(() => import("../../components/admin-dashboard"));
const UserDashboard = lazy(() => import("../../components/user-dashboard"));

export default function Dashborad() {
  const [admin, setAdmin] = useState(false);
  const userId = useUserId();
  const [exitApp, setExitApp] = useState(0);

  useVefifyToken();

  const backAction = () => {
    requestPermissionsAsync().then(() => {});

    setTimeout(() => {
      setExitApp(0);
    }, 2000); // 2 seconds to tap second-time

    if (exitApp === 0) {
      setExitApp(exitApp + 1);

      ToastAndroid.show("برای خروج دوباره کلیک کنید !!", ToastAndroid.SHORT);
    } else if (exitApp === 1) {
      BackHandler.exitApp();
    }

    return true;
  };

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

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [exitApp]);

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
