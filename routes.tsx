import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerContent from "./components/overal/menu";
import AddCritics from "./screens/add-critics";
import Divination from "./screens/divination";
import VerifyOTP from "./screens/verifyOTP";
import Dashborad from "./screens/dashboard";
import Signin from "./screens/singin";

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: "right",
      }}
      drawerContent={CustomDrawerContent}
      initialRouteName="Signin"
    >
      <Drawer.Screen
        name="Signin"
        component={Signin}
        options={{ title: "ورود" }}
      />
      <Drawer.Screen
        name="verifyOTP"
        component={VerifyOTP}
        options={{ drawerItemStyle: { height: 0 } }}
      />
      <Drawer.Screen
        name="dashboard"
        component={Dashborad}
        options={{ title: "داشبورد" }}
      />
      <Drawer.Screen
        name="critics"
        component={AddCritics}
        options={{ title: "ارسال انتقاد" }}
      />
      <Drawer.Screen name="divination" component={Divination} />
    </Drawer.Navigator>
  );
}
