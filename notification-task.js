import BackgroundFetch from "react-native-background-fetch";
import * as SecureStore from "expo-secure-store";

export async function NotificationTask() {
  const onEvent = async () => {
    const token = SecureStore.getItemAsync("_token");

    if (token) {
      require("./fetch-notifiction");
    }

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
