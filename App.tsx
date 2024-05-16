import { NavigationContainer } from "@react-navigation/native";
import BackgroundFetch from "react-native-background-fetch";
import { NotificationTask } from "./notification-task";
import Alert from "./components/overal/alert";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { I18nManager } from "react-native";
import "react-native-gesture-handler";
import Splash from "./screens/splash";
import { useFonts } from "expo-font";
import Routes from "./routes";

try {
  I18nManager.allowRTL(true);
  I18nManager.forceRTL(true);
} catch (e) {
  console.log(e);
}

// configs
import "./axios";
import Menu from "./components/overal/quick-panel";

export default function App() {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    NotificationTask();
    BackgroundFetch.scheduleTask({
      forceAlarmManager: true,
      taskId: "trigger",
      delay: 0,
    });
  }, []);

  const [fontsLoaded] = useFonts({
    IRANSans: require("./assets/fonts/IRANSans.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  setTimeout(() => {
    setSplash(false);
  }, 1000);

  return (
    <>
      {splash ? (
        <Splash />
      ) : (
        <>
          <NavigationContainer>
            <Routes />
            <Menu />
            <StatusBar style="auto" />
            <Alert />
          </NavigationContainer>
        </>
      )}
    </>
  );
}
