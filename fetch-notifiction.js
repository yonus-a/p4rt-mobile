import * as Notifications from "expo-notifications";
import * as SecureStore from "expo-secure-store";
import { io } from "socket.io-client";

const socket = io("wss://www.p4rt.ir");

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

socket.on("message", (data) => {
  const nextData = JSON.parse(data);

  if (nextData.private) {
    const userId = SecureStore.getItem("userId");

    if (nextData.receptors.includes(userId)) {
      sendNotif(nextData.title, nextData.message);
    }
  } else {
    sendNotif(nextData.title, nextData.message);
  }
});

const sendNotif = (title, message) => {
  Notifications.requestPermissionsAsync().then(() => {
    Notifications.scheduleNotificationAsync({
      content: {
        body: message,
        title,
      },
      trigger: null,
    });
  });
};
