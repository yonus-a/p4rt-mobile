import { CLR_PRIMARY, CLR_WHITE } from "../../../styles/globalStyles";
import { TabBar } from "react-native-tab-view";
import styles from "./styles";

export default function Tabbar(props) {
  return (
    <TabBar
      {...props}
      labelStyle={styles.label}
      indicatorStyle={{ backgroundColor: "#556EFE", height: 2 }}
      scrollEnabled={true}
      style={{
        backgroundColor: CLR_WHITE,
        borderBottomColor: "#ccc",
        borderRadius: 8,
        elevation: 1,
      }}
    />
  );
}
