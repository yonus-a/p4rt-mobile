import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View, Image } from "react-native";
import GrowthMenu from "../growth-menu";
import RefahiMenu from "../refahi-menu";
import styles from "./styles";
import CustomText from "../../utils/text";
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
        <GrowthMenu />
        <RefahiMenu />
        <View style={styles.wrapper}>
          <Icons />
          <CustomText style={[styles.text, { marginTop: 20 }]}>
            سامانه داخلی پارت
          </CustomText>
          <CustomText style={[styles.text, { fontSize: 10 }]}>
            WWWW.P4RT.IR
          </CustomText>
        </View>
      </View>
    </DrawerContentScrollView>
  );
}
