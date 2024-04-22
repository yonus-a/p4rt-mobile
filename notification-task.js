import { AppRegistry } from "react-native";
import BackgroundFetch from "react-native-background-fetch";

export async function NotificationTask() {
  const onEvent = async () => {
    require("./fetch-notifiction");
    await new Promise(() => {});
  };


  await BackgroundFetch.configure(
    {
      minimumFetchInterval: 1,
      stopOnTerminate: false,
      forceAlarmManager: true,
      enableHeadless: true,
    },
    onEvent,
    () => {}
  );
}
