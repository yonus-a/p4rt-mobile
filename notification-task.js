import BackgroundService from "react-native-background-actions";
import registerNotificationServer from "./notif";

const options = {
  taskName: "Example",
  taskTitle: "سامانه داخلی پارت",
  taskDesc: "",
  taskIcon: {
    name: "ic_launcher",
    type: "mipmap",
  },
  color: "transparent",
  linkingURI: "yourSchemeHere://chat/jane", // See Deep Linking for more info
  parameters: {
    delay: 1000,
  },
};

export default async function NotificationTask() {
  await BackgroundService.start(() => {
    registerNotificationServer();
    return new Promise(() => {});
  }, options);
  //   await BackgroundService.updateNotification({
  //     taskDesc: "New ExampleTask description",
  //   }); // Only Android, iOS will ignore this call
  // iOS will also run everything here in the background until .stop() is called
}
