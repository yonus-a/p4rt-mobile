import * as Notifications from "expo-notifications";
const WebSocket = require("ws");

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const ws = new WebSocket("ws://localhost/path", {
  perMessageDeflate: false,
});

// Notifications.requestPermissionsAsync().then((res) => {
//   Notifications.scheduleNotificationAsync({
//     content: {
//       title: data?.title,
//       body: data?.body,
//     },
//     trigger: null,
//   });
// });
