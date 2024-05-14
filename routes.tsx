import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShowDailyReport from "./screens/daily-report/show-dialy-reports";
import NotificationManagment from "./screens/notification-managment";
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
import EditFood from "./screens/edit-food";
import SmsPanel from "./screens/sms-panel";
import EditUser from "./screens/edit-user";
import useUserId from "./hooks/useUserId";
import Absentee from "./screens/absentee";
import AddUser from "./screens/add-user";
import AddFood from "./screens/add-food";
import Signin from "./screens/login";
import Posts from "./screens/posts";
import Foods from "./screens/foods";
import Post from "./screens/post";
import Cart from "./screens/cart";
import axios from "axios";
import Quran from "./screens/quran";

export const Stack = createNativeStackNavigator();

export default function Routes() {
  const userId = useUserId();
  const [admin, setAdmin] = useState(false);
  const isManager = userId === "4060588326";

  useEffect(() => {
    (async () => {
      try {
        if (userId) {
          const { data } = await axios("/role/isAdmin", {
            params: { userId },
          });

          setAdmin(data.isAdmin);
        }
      } catch (e) {
        console.log(e);
        await errorAlert();
      }
    })();
  }, [userId, admin]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="dashboard"
        component={Dashborad}
        initialParams={{ admin }}
      />
      {!isManager && <Stack.Screen name="critics" component={AddCritics} />}

      <Stack.Screen name="foods" component={Foods} />
      <Stack.Screen name="quran" component={Quran} />
      <Stack.Screen name="showOrders" component={ShowOrders} />
      {isManager && <Stack.Screen name="showCritics" component={ShowCritics} />}

      <Stack.Screen name="notification" component={Notification} />
      <Stack.Screen name="showTickets" component={ShowTickets} />
      {admin && <Stack.Screen name="absentee" component={Absentee} />}
      {admin && (
        <Stack.Screen name="showDailyReports" component={ShowDailyReport} />
      )}
      {admin && <Stack.Screen name="userManagment" component={UserManagment} />}
      {admin && (
        <Stack.Screen
          name="notificationManagment"
          component={NotificationManagment}
        />
      )}
      <Stack.Screen name="addTicket" component={AddTicket} />
      <Stack.Screen name="ticket" component={Ticket} />
      <Stack.Screen name="divination" component={Divination} />
      {admin && <Stack.Screen name="editFood" component={EditFood} />}
      {admin && <Stack.Screen name="editUser" component={EditUser} />}
      <Stack.Screen name="post" component={Post} />
      <Stack.Screen name="posts" component={Posts} />
      {admin && <Stack.Screen name="addUser" component={AddUser} />}
      <Stack.Screen name="cart" component={Cart} />
      {admin && <Stack.Screen name="addFood" component={AddFood} />}
      {admin && (
        <Stack.Screen name="orderManagment" component={OrderManagment} />
      )}
      {admin && <Stack.Screen name="foodManagment" component={FoodManagment} />}
      {admin && <Stack.Screen name="smsPanel" component={SmsPanel} />}
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="verifyOTP" component={VerifyOTP} />
    </Stack.Navigator>
  );
}
