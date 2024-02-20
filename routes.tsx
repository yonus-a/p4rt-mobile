import CustomDrawerContent from "./components/overal/drawer-nav";
import { createDrawerNavigator } from "@react-navigation/drawer";
import VerifyOTP from "./screens/verifyOTP";
import Dashborad from "./screens/dashboard";
import Signin from "./screens/singin";

const Stack = createDrawerNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: "right",
      }}
      drawerContent={CustomDrawerContent}
      initialRouteName="Signin"
    >
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{ title: "ورود" }}
      />
      <Stack.Screen
        name="verifyOTP"
        component={VerifyOTP}
        options={{ drawerItemStyle: { height: 0 } }}
      />
      <Stack.Screen
        name="dashboard"
        component={Dashborad}
        options={{ title: "داشبورد" }}
      />
    </Stack.Navigator>
  );
}
