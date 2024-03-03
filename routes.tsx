import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerContent from "./components/overal/menu";
import ShowTickets from "./screens/tickets/show-tickets";
import ShowCritics from "./screens/critics/show-critics";
import AddCritics from "./screens/critics/add-critics";
import AddTicket from "./screens/tickets/add-ticket";
import Notification from "./screens/notification";
import Divination from "./screens/divination";
import Ticket from "./screens/tickets/ticket";
import VerifyOTP from "./screens/verifyOTP";
import Dashborad from "./screens/dashboard";
import Signin from "./screens/singin";
import Foods from "./screens/foods";

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
      <Drawer.Screen
        name="foods"
        component={Foods}
        options={{ title: "سفارش غذا" }}
      />
      <Drawer.Screen
        name="showCritics"
        component={ShowCritics}
        options={{ title: "انتقاداد" }}
      />
      <Drawer.Screen
        name="notification"
        component={Notification}
        options={{ title: "اعلانات" }}
      />
      <Drawer.Screen
        name="showTickets"
        component={ShowTickets}
        options={{ title: "درخواست های من" }}
      />
      <Drawer.Screen
        name="addTicket"
        component={AddTicket}
        options={{ title: "اضافه کردن درخواست" }}
      />
      <Drawer.Screen
        name="ticket"
        component={Ticket}
        options={{ title: "در خاست" }}
      />
      <Drawer.Screen name="divination" component={Divination} />
    </Drawer.Navigator>
  );
}
