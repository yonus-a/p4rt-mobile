import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import errorAlert from "../../../utils/alert/error";
import useUserId from "../../../hooks/useUserId";
import useClear from "../../../hooks/useClear";
import { useEffect, useState } from "react";
import { View, Image } from "react-native";
import GrowthMenu from "../growth-menu";
import RefahiMenu from "../refahi-menu";
import AdminMenu from "../admin-menu";
import styles from "./styles";
import Icons from "../icons";
import axios from "axios";

export default function CustomDrawerContent(props) {
  const [admin, setAdmin] = useState(false);
  const userId = useUserId();

  useClear(() => {
    setAdmin(false);
  });

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
    <DrawerContentScrollView {...props} style={styles.drawer}>
      <View style={styles.topSection}>
        <Image
          style={styles.logo}
          source={require("../../../assets/icons/fa-logo.png")}
        />
      </View>
      <View style={styles.container}>
        <DrawerItemList {...props} />
        {admin && <AdminMenu />}
        <GrowthMenu />
        <RefahiMenu />
        <View style={styles.wrapper}>
          <Icons />
          <Image
            source={require("../../../assets/images/overal/text-logo.png")}
            style={styles.icon}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
}
