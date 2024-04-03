import { TabBar } from "react-native-tab-view";
import styles from "./styles";
export default function Tabbar(props) {
  return (
    <TabBar
      {...props}
      labelStyle={styles.label}
      indicatorStyle={{ backgroundColor: "#555", height: 1 }}
      scrollEnabled
      style={{
        backgroundColor: "#fcfcfc",
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        elevation: 0,
        transform: [{ scaleX: -1 }],
      }}
    />
  );
}
