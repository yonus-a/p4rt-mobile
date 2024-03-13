import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View, Image } from "react-native";
import GrowthMenu from "../growth-menu";
import RefahiMenu from "../refahi-menu";
import AdminMenu from "../admin-menu";
import styles from "./styles";
import Icons from "../icons";

export default function CustomDrawerContent(props) {
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
        <AdminMenu />
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
