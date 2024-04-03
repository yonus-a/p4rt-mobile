import { useDrawerStatus } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { DrawerItem } from "@react-navigation/drawer";
import Collapsible from "react-native-collapsible";
import { useEffect, useState } from "react";
import drawer from "../../../styles/drawer";
import { Image } from "react-native";
import { View } from "react-native";

export default function RefahiMenu() {
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
    <View>
      <DrawerItem
        label="رفاهی"
        onPress={() => setCollapsed(!collapsed)}
        labelStyle={drawer.label}
        style={drawer.item}
        icon={() => (
          <Image
            style={drawer.icon}
            source={require("../../../assets/icons/happy.png")}
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
              category: [43, 1, 28, 34, 44, 29, 20, 24, 27, 36, 39, 42],
            })
          }
        />
        <DrawerItem
          label="تخفیفات داغ"
          labelStyle={drawer.label}
          style={drawer.item}
          onPress={() => navigate("posts", { category: 43 })}
        />
        <DrawerItem
          label="بیوگرافی"
          labelStyle={drawer.label}
          style={drawer.item}
          onPress={() => navigate("posts", { category: 28 })}
        />
        <DrawerItem
          label="هنر و سرگرمی"
          labelStyle={drawer.label}
          style={drawer.item}
          onPress={() => navigate("posts", { category: 1 })}
        />
        <DrawerItem
          label="سلامتی و تن درستی"
          labelStyle={drawer.label}
          style={drawer.item}
          onPress={() => navigate("posts", { category: 34 })}
        />
        <DrawerItem
          label="گردش گری"
          labelStyle={drawer.label}
          style={drawer.item}
          onPress={() => navigate("posts", { category: 44 })}
        />
        <DrawerItem
          label="کارمند های نمونه"
          labelStyle={drawer.label}
          style={drawer.item}
          onPress={() => navigate("posts", { category: 29 })}
        />
      </Collapsible>
    </View>
  );
}
