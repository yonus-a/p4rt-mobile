import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View, Image } from "react-native";
import styles from "./styles";

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.topSection}>
        <Image
          style={styles.logo}
          source={require("../../../assets/icons/fa-logo.png")}
        />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
