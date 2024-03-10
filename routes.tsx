import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerContent from "./components/overal/menu";
import ShowTickets from "./screens/tickets/show-tickets";
import AddCritics from "./screens/critics/add-critics";
import AddTicket from "./screens/tickets/add-ticket";
import Notification from "./screens/notification";
import Divination from "./screens/divination";
import Ticket from "./screens/tickets/ticket";
import ShowOrders from "./screens/show-orders";
import VerifyOTP from "./screens/verifyOTP";
import Dashborad from "./screens/dashboard";
import { CLR_WHITE } from "./globalStyles";
import useUserId from "./hooks/useUserId";
import drawerStyle from "./styles/drawer";
import Signin from "./screens/singin";
import Foods from "./screens/foods";
import { Image } from "react-native";
import Posts from "./screens/posts";
import Cart from "./screens/cart";
import Post from "./screens/post";
import Absentee from "./screens/absentee";
import ShowDailyReport from "./screens/daily-report/show-dialy-reports";
import SmsPanel from "./screens/sms-panel";
import NotificationManagment from "./screens/notification-managment";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function Root() {
  const userId = useUserId();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: "right",
        sceneContainerStyle: { backgroundColor: CLR_WHITE },
        drawerLabelStyle: drawerStyle.label,
        drawerItemStyle: drawerStyle.item,
      }}
      drawerContent={CustomDrawerContent}
      initialRouteName="Signin"
    >
      {!userId ? (
        <>
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
        </>
      ) : (
        <>
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
                  source={require("./assets/icons/food-order.png")}
                  style={drawerStyle.icon}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="cart"
            component={Cart}
            options={{ drawerItemStyle: { height: 0 } }}
          />
          {/* <Drawer.Screen
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
          /> */}
          <Drawer.Screen
            name="notification"
            component={Notification}
            options={{
              title: "اعلانات",
              drawerIcon: () => (
                <Image
                  source={require("./assets/icons/notifi.png")}
                  style={drawerStyle.icon}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="smsPanel"
            component={SmsPanel}
            options={{
              title: "پنل پیامکی",
              drawerIcon: () => (
                <Image
                  source={require("./assets/icons/notifi.png")}
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
                  source={require("./assets/icons/ads.png")}
                  style={drawerStyle.icon}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="absentee"
            component={Absentee}
            options={{
              title: "حضور و غیاب",
              drawerIcon: () => (
                <Image
                  source={require("./assets/icons/ads.png")}
                  style={drawerStyle.icon}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="showDailyReports"
            component={ShowDailyReport}
            options={{
              title: "گزارش نیروی انسانی",
              drawerIcon: () => (
                <Image
                  source={require("./assets/icons/ads.png")}
                  style={drawerStyle.icon}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="notificationManagment"
            component={NotificationManagment}
            options={{
              title: "مدریت اعلانات",
              drawerIcon: () => (
                <Image
                  source={require("./assets/icons/ads.png")}
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
          <Drawer.Screen
            name="post"
            component={Post}
            options={{
              drawerItemStyle: { height: 0 },
            }}
          />
          <Drawer.Screen
            name="posts"
            component={Posts}
            options={{
              drawerItemStyle: { height: 0 },
            }}
          />
        </>
      )}
    </Drawer.Navigator>
  );
}

export default function Routes() {
  const userId = useUserId();

  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="root" component={Root} />
        {userId ? (
          <>
            <Stack.Screen name="Signin" component={Signin} />
            <Stack.Screen name="verifyOTP" component={VerifyOTP} />
          </>
        ) : (
          <>
            <Stack.Screen name="dashboard" component={Dashborad} />
            <Stack.Screen name="critics" component={AddCritics} />
            <Stack.Screen name="foods" component={Foods} />
            <Stack.Screen name="showOrders" component={ShowOrders} />
            <Stack.Screen name="cart" component={Cart} />
            <Stack.Screen name="notification" component={Notification} />
            <Stack.Screen name="showTickets" component={ShowTickets} />
            <Stack.Screen name="addTicket" component={AddTicket} />
            <Stack.Screen name="ticket" component={Ticket} />
            <Stack.Screen name="divination" component={Divination} />
            <Stack.Screen name="post" component={Post} />
            <Stack.Screen name="posts" component={Posts} />
            <Stack.Screen name="absentee" component={Absentee} />
            <Stack.Screen name="showDailyReports" component={ShowDailyReport} />
            <Stack.Screen name="smsPanel" component={SmsPanel} />
            <Stack.Screen
              name="notificationManagment"
              component={NotificationManagment}
            />
          </>
        )}
      </Stack.Navigator>
    </>
  );
}
