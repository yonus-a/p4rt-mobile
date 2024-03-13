import { useNavigation } from "@react-navigation/native";
import { DrawerItem } from "@react-navigation/drawer";
import Collapsible from "react-native-collapsible";
import drawer from "../../../styles/drawer";
import { Image } from "react-native";
import { View } from "react-native";
import { useState } from "react";

export default function AdminMenu() {
  const [collapsed, setCollapsed] = useState(true);
  const navigation = useNavigation();
  const navigate: any = navigation.navigate;

  return (
    <View style={{ marginTop: -132 }}>
      <DrawerItem
        label="مدریت"
        onPress={() => setCollapsed(!collapsed)}
        labelStyle={drawer.label}
        style={drawer.item}
        icon={() => (
          <Image
            style={drawer.icon}
            source={require("../../../assets/icons/admin.png")}
          />
        )}
      />
      <Collapsible collapsed={collapsed} style={drawer.submenu}>
        <DrawerItem
          label="مدیریت سفارشات"
          labelStyle={drawer.label}
          onPress={() => navigate("orderManagment")}
          style={drawer.item}
        />
        <DrawerItem
          label="مدیریت غذا ها"
          labelStyle={drawer.label}
          style={drawer.item}
          onPress={() => navigate("foodManagment")}
        />
        <DrawerItem
          label="پنل پیامکی"
          labelStyle={drawer.label}
          style={drawer.item}
          onPress={() => navigate("smsPanel")}
        />
        <DrawerItem
          label="مدیریت کاربران"
          labelStyle={drawer.label}
          style={drawer.item}
          onPress={() => navigate("userManagment")}
        />
        <DrawerItem
          label="مدیریت اعلانات"
          labelStyle={drawer.label}
          style={drawer.item}
          onPress={() => navigate("notificationManagment")}
        />
      </Collapsible>
    </View>
  );
}
