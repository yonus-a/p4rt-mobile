import * as Notifications from "expo-notifications";
import * as SecureStore from "expo-secure-store";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const socket = new WebSocket(
  "ws://195.88.208.250:3005/UtfiK2CjPRBrA8p58ZogBwJibUyeCkP46LFI8tTtnQChHArAyD"
);

socket.addEventListener("message", async ({ data }) => {
  const nextData = JSON.parse(data);

  if (nextData.private) {
    const userId = await SecureStore.getItemAsync("userId");

    if (nextData.receptors.includes(userId)) {
      sendNotif(nextData.title, nextData.message);
    }
  } else {
    sendNotif(nextData.title, nextData.message);
  }
});

const sendNotif = (title, message) => {
  Notifications.scheduleNotificationAsync({
    content: {
      body: message,
      title,
    },
    trigger: null,
  });
};
