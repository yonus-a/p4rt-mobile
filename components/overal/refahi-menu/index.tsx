import { useNavigation } from "@react-navigation/native";
import { DrawerItem } from "@react-navigation/drawer";
import Collapsible from "react-native-collapsible";
import drawer from "../../../styles/drawer";
import { Image } from "react-native";
import { View } from "react-native";
import { useState } from "react";

export default function RefahiMenu() {
  const [collapsed, setCollapsed] = useState(true);
  const navigation = useNavigation();
  const navigate: any = navigation.navigate;

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
      <Collapsible collapsed={collapsed}>
        <DrawerItem
          label="همه مقالات"
          labelStyle={drawer.label}
          style={drawer.item}
          onPress={() => navigate("posts", { category: 28 })}
        />
        <DrawerItem
          label="تخفیفات داغ"
          labelStyle={drawer.label}
          style={drawer.item}
          onPress={() => navigate("posts", { category: 28 })}
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
