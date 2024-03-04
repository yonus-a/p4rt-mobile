import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerContent from "./components/overal/menu";
import ShowTickets from "./screens/tickets/show-tickets";
import ShowCritics from "./screens/critics/show-critics";
import AddCritics from "./screens/critics/add-critics";
import AddTicket from "./screens/tickets/add-ticket";
import Notification from "./screens/notification";
import Divination from "./screens/divination";
import Ticket from "./screens/tickets/ticket";
import ShowOrders from "./screens/show-orders";
import VerifyOTP from "./screens/verifyOTP";
import Dashborad from "./screens/dashboard";
import drawerStyle from "./styles/drawer";
import Signin from "./screens/singin";
import Foods from "./screens/foods";
import { Image } from "react-native";
import Cart from "./screens/cart";

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: "right",
        headerTitleStyle: { fontFamily: "IRANSans" },
        drawerLabelStyle: { fontFamily: "IRANSans" },
        drawerItemStyle: { paddingRight: 25 },
      }}
      drawerContent={CustomDrawerContent}
      initialRouteName="Signin"
    >
      <Drawer.Screen
        name="Signin"
        component={Signin}
        options={{ drawerItemStyle: { height: 0 } }}
      />
      <Drawer.Screen
        name="verifyOTP"
        component={VerifyOTP}
        options={{ drawerItemStyle: { height: 0 } }}
      />
      <Drawer.Screen
        name="dashboard"
        component={Dashborad}
        options={{
          title: "داشبورد",
          drawerIcon: () => (
            <Image
              source={require("./assets/icons/home.png")}
              style={drawerStyle.icon}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="critics"
        component={AddCritics}
        options={{
          title: "ارسال انتقاد",
          drawerIcon: () => (
            <Image
              source={require("./assets/icons/mail.png")}
              style={drawerStyle.icon}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="foods"
        component={Foods}
        options={{
          title: "سفارش غذا",
          drawerIcon: () => (
            <Image
              source={require("./assets/icons/food.png")}
              style={drawerStyle.icon}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="showOrders"
        component={ShowOrders}
        options={{
          title: "سفارش های من",
          drawerIcon: () => (
            <Image
              source={require("./assets/icons/food.png")}
              style={drawerStyle.icon}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="cart"
        component={Cart}
        options={{
          title: "سبد خرید",
          drawerIcon: () => (
            <Image
              source={require("./assets/icons/food.png")}
              style={drawerStyle.icon}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="showCritics"
        component={ShowCritics}
        options={{
          title: "انتقاداد",
          drawerIcon: () => (
            <Image
              source={require("./assets/icons/mail.png")}
              style={drawerStyle.icon}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="notification"
        component={Notification}
        options={{
          title: "اعلانات",
          drawerIcon: () => (
            <Image
              source={require("./assets/icons/notif.png")}
              style={drawerStyle.icon}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="showTickets"
        component={ShowTickets}
        options={{
          title: "درخواست های من",
          drawerIcon: () => (
            <Image
              source={require("./assets/icons/ticket.png")}
              style={drawerStyle.icon}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="addTicket"
        component={AddTicket}
        options={{
          drawerItemStyle: { height: 0 },
        }}
      />
      <Drawer.Screen
        name="ticket"
        component={Ticket}
        options={{
          drawerItemStyle: { height: 0 },
        }}
      />
      <Drawer.Screen
        name="divination"
        component={Divination}
        options={{
          drawerItemStyle: { height: 0 },
        }}
      />
    </Drawer.Navigator>
  );
}
