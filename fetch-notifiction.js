import * as Notifications from "expo-notifications";
import * as SecureStore from "expo-secure-store";
import { io } from "socket.io-client";
import axios from "axios";

const userId = SecureStore.getItem("userId");
const socket = io("wss://www.p4rt.ir", {
  query: {
    id: userId,
  },
});

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

socket.on("message", (data) => {
  if (data.private) {
    if (data.receptors.includes(userId)) {
      sendNotif(data.title, data.message, data.id);
    }
  } else {
    sendNotif(data.title, data.message, data.id);
  }
});

const sendNotif = async (title, message, id) => {
  await Notifications.requestPermissionsAsync();
  await Notifications.scheduleNotificationAsync({
    content: {
      body: message,
      title,
    },
    trigger: null,
  });

  await axios.post("/notification/addNotificationSend", {
    notifId: id,
    userId,
  });
};
