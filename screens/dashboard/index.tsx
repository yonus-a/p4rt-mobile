import AdminDashboard from "../../components/admin-dashboard";
import QuickPanel from "../../components/overal/quick-panel";
import UserDashboard from "../../components/user-dashboard";
import Header from "../../components/overal/header/indexx";
import * as SecureStore from "expo-secure-store";
import errorAlert from "../../utils/alert/error";
import useUserId from "../../hooks/useUserId";
import { useEffect, useState } from "react";
import { View } from "react-native";
import styles from "./styles";
import axios from "axios";

export default function Dashborad({ navigation }: any) {
  const [admin, setAdmin] = useState(false);
  const token = SecureStore.getItem("_token");
  const userId = useUserId();

  if (!token) {
    navigation.navigate("Signin");
  }

  // useEffect(() => {
  //   (async () => {
  //     const token = await SecureStore.getItemAsync("_token");

  //     if (!token) {
  //       const { data } = await axios.post("/signin/vefifyToken", { token });

  //       if (!data.success) {
  //         navigation.navigate("signIn");
  //       }
  //     } else {
  //       navigation.navigate("signIn");
  //     }
  //   })();
  // }, []);

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
      <Header navigation={navigation} />
      {admin ? <AdminDashboard /> : <UserDashboard />}
      <QuickPanel />
    </View>
  );
}
