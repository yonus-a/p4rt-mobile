import ShowDailyReport from "./screens/daily-report/show-dialy-reports";
import NotificationManagment from "./screens/notification-managment";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerContent from "./components/overal/menu";
import ShowTickets from "./screens/tickets/show-tickets";
import ShowCritics from "./screens/critics/show-critics";
import OrderManagment from "./screens/orders-managment";
import AddCritics from "./screens/critics/add-critics";
import FoodManagment from "./screens/food-managment";
import AddTicket from "./screens/tickets/add-ticket";
import UserManagment from "./screens/user-managment";
import Notification from "./screens/notification";
import ShowOrders from "./screens/show-orders";
import errorAlert from "./utils/alert/error";
import Divination from "./screens/divination";
import Ticket from "./screens/tickets/ticket";
import VerifyOTP from "./screens/verifyOTP";
import Dashborad from "./screens/dashboard";
import { useEffect, useState } from "react";
import { CLR_WHITE } from "./globalStyles";
import EditFood from "./screens/edit-food";
import SmsPanel from "./screens/sms-panel";
import EditUser from "./screens/edit-user";
import useUserId from "./hooks/useUserId";
import drawerStyle from "./styles/drawer";
import Absentee from "./screens/absentee";
import AddUser from "./screens/add-user";
import AddFood from "./screens/add-food";
import Signin from "./screens/singin";
import { Image } from "react-native";
import Posts from "./screens/posts";
import Foods from "./screens/foods";
import Post from "./screens/post";
import Cart from "./screens/cart";
import axios from "axios";

export const Drawer = createDrawerNavigator();

export default function Routes() {
  const userId = useUserId();
  const [admin, setAdmin] = useState(false);
  const isManager = userId === "4060588326";

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios("/role/isAdmin", {
          params: { userId },
        });

        setAdmin(data.isAdmin);
      } catch (e) {
        await errorAlert();
      }
    })();
  });

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
            initialParams={{ admin }}
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
          {!isManager && (
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
          )}
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
          {isManager && (
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
          )}
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
          {admin && (
            <Drawer.Screen
              name="absentee"
              component={Absentee}
              options={{
                title: "حضور و غیاب",
                drawerIcon: () => (
                  <Image
                    source={require("./assets/icons/chart.png")}
                    style={drawerStyle.icon}
                  />
                ),
              }}
            />
          )}
          {admin && (
            <Drawer.Screen
              name="showDailyReports"
              component={ShowDailyReport}
              options={{
                title: "گزارش نیروی انسانی",
                drawerIcon: () => (
                  <Image
                    source={require("./assets/icons/data.png")}
                    style={drawerStyle.icon}
                  />
                ),
              }}
            />
          )}
          {admin && (
            <Drawer.Screen
              name="userManagment"
              component={UserManagment}
              options={{
                drawerItemStyle: { height: 0 },
              }}
            />
          )}
          {admin && (
            <Drawer.Screen
              name="notificationManagment"
              component={NotificationManagment}
              options={{
                drawerItemStyle: { height: 0 },
              }}
            />
          )}
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
          {admin && (
            <Drawer.Screen
              name="editFood"
              component={EditFood}
              options={{
                drawerItemStyle: { height: 0 },
              }}
            />
          )}
          {admin && (
            <Drawer.Screen
              name="editUser"
              component={EditUser}
              options={{
                drawerItemStyle: { height: 0 },
              }}
            />
          )}
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
          {admin && (
            <Drawer.Screen
              name="addUser"
              component={AddUser}
              options={{
                drawerItemStyle: { height: 0 },
              }}
            />
          )}
          <Drawer.Screen
            name="cart"
            component={Cart}
            options={{ drawerItemStyle: { height: 0 } }}
          />
          {admin && (
            <Drawer.Screen
              name="addFood"
              component={AddFood}
              options={{
                drawerItemStyle: { height: 0 },
              }}
            />
          )}
          {admin && (
            <Drawer.Screen
              name="orderManagment"
              component={OrderManagment}
              options={{
                drawerItemStyle: { height: 0 },
              }}
            />
          )}
          {admin && (
            <Drawer.Screen
              name="foodManagment"
              component={FoodManagment}
              options={{
                drawerItemStyle: { height: 0 },
              }}
            />
          )}
          {admin && (
            <Drawer.Screen
              name="smsPanel"
              component={SmsPanel}
              options={{
                drawerItemStyle: { height: 0 },
              }}
            />
          )}
        </>
      )}
    </Drawer.Navigator>
  );
}
