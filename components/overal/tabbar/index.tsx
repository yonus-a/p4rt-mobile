import { TabBar } from "react-native-tab-view";

export default function Tabbar(props) {
  return (
    <TabBar
      {...props}
      scrollEnabled
      labelStyle={{ color: "black" }}
      indicatorStyle={{ backgroundColor: "#555", height: 1 }}
      style={{
        backgroundColor: "#fcfcfc",
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        elevation: 0,
      }}
    />
  );
}
