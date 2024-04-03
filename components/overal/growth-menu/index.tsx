import { DrawerItem, useDrawerStatus } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import Collapsible from "react-native-collapsible";
import drawer from "../../../styles/drawer";
import { useEffect, useState } from "react";
import { Image } from "react-native";
import { View } from "react-native";
import styles from "./styles";

export default function GrowthMenu() {
  const [collapsed, setCollapsed] = useState(true);
  const navigation = useNavigation();
  const navigate: any = navigation.navigate;
  const status = useDrawerStatus();

  useEffect(() => {
    if (status === "closed") {
      setCollapsed(true);
    }
  }, [status]);

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
          onPress={() =>
            navigate("posts", {
              categories: [2, 3, 5, 14, 15, 16, 17, 18, 21, 19, 22, 23, 40],
            })
          }
        />
        <DrawerItem
          label="پادکست ها"
          labelStyle={drawer.label}
          style={drawer.item}
          onPress={() => navigate("posts", { categories: 16 })}
        />
        <DrawerItem
          label="معرفی کتاب"
          labelStyle={drawer.label}
          style={drawer.item}
          onPress={() => navigate("posts", { categories: 17 })}
        />
        <DrawerItem
          label="توسعه"
          labelStyle={drawer.label}
          style={drawer.item}
          onPress={() => navigate("posts", { categories: 18 })}
        />
        <DrawerItem
          label="سبک پوشش"
          labelStyle={drawer.label}
          style={drawer.item}
          onPress={() => navigate("posts", { categories: 19 })}
        />
        <DrawerItem
          label="روانشناسی"
          labelStyle={drawer.label}
          style={drawer.item}
          onPress={() => navigate("posts", { categories: 20 })}
        />
        <DrawerItem
          label="آموزش"
          labelStyle={drawer.label}
          style={drawer.item}
          onPress={() => navigate("posts", { categories: 21 })}
        />
        <DrawerItem
          label="هوش مصنوعی"
          labelStyle={drawer.label}
          style={drawer.item}
          onPress={() => navigate("posts", { categories: 41 })}
        />
      </Collapsible>
    </View>
  );
}
