import { TabBar } from "react-native-tab-view";

export default function Tabbar(props) {
  return (
    <TabBar
      {...props}
      scrollEnabled
      labelStyle={{ color: "black" }}
      style={{ backgroundColor: "white" }}
      indicatorStyle={{ backgroundColor: "#555", height: 1 }}
    />
  );
}
