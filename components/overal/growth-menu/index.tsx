import { useNavigation } from "@react-navigation/native";
import { DrawerItem } from "@react-navigation/drawer";
import Collapsible from "react-native-collapsible";
import drawer from "../../../styles/drawer";
import { Image } from "react-native";
import { View } from "react-native";
import { useState } from "react";
import styles from "./styles";

export default function GrowthMenu() {
  const [collapsed, setCollapsed] = useState(true);
  const navigation = useNavigation();
  const navigate: any = navigation.navigate;

  return (
    <View style={styles.refahiMenu}>
      <DrawerItem
        label="توسعه و تعالی"
        onPress={() => setCollapsed(!collapsed)}
        labelStyle={drawer.label}
        style={drawer.item}
        icon={() => (
          <Image
            style={drawer.icon}
            source={require("../../../assets/icons/growth.png")}
          />
        )}
      />
      <Collapsible collapsed={collapsed} style={drawer.submenu}>
        <DrawerItem
          label="همه مقالات"
          labelStyle={drawer.label}
          style={drawer.item}
          onPress={() => navigate("posts", { category: 16 })}
        />
        <DrawerItem
          label="پادکست ها"
          labelStyle={drawer.label}
          style={drawer.item}
          onPress={() => navigate("posts", { category: 16 })}
        />
        <DrawerItem
          label="معرفی کتاب"
          labelStyle={drawer.label}
          style={drawer.item}
          onPress={() => navigate("posts", { category: 17 })}
        />
        <DrawerItem
          label="توسعه"
          labelStyle={drawer.label}
          style={drawer.item}
          onPress={() => navigate("posts", { category: 18 })}
        />
        <DrawerItem
          label="سبک پوشش"
          labelStyle={drawer.label}
          style={drawer.item}
          onPress={() => navigate("posts", { category: 19 })}
        />
        <DrawerItem
          label="روانشناسی"
          labelStyle={drawer.label}
          style={drawer.item}
          onPress={() => navigate("posts", { category: 20 })}
        />
        <DrawerItem
          label="آموزش"
          labelStyle={drawer.label}
          style={drawer.item}
          onPress={() => navigate("posts", { category: 21 })}
        />
        <DrawerItem
          label="هوش مصنوعی"
          labelStyle={drawer.label}
          style={drawer.item}
          onPress={() => navigate("posts", { category: 41 })}
        />
      </Collapsible>
    </View>
  );
}
