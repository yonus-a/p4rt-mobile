import registerRootComponent from "expo/build/launch/registerRootComponent";
import BackgroundFetch from "react-native-background-fetch";

import App from "./App";

let MyHeadlessTask = async (event) => {
  require("./fetch-notifiction");
  await new Promise(() => {});
};

BackgroundFetch.registerHeadlessTask(MyHeadlessTask);

registerRootComponent(App);
