import NavigateIcon from "../../utils/navigate-icon";
import QuickAccess from "../quick-access";
import { View } from "react-native";
import styles from "./styles";

export default function Menu() {
  return (
    <View style={styles.quickPanel}>
      <NavigateIcon
        srouce={require("../../../assets/icons/home.png")}
        iconStyle={styles.icon}
        alt="home"
        to="home"
      />
      <NavigateIcon
        srouce={require("../../../assets/icons/send.png")}
        iconStyle={styles.icon}
        alt="send ciritics"
        to="ciritics"
      />
      <QuickAccess />
      <NavigateIcon
        srouce={require("../../../assets/icons/food.png")}
        iconStyle={styles.icon}
        alt="order foods"
        to="foods"
      />
      <NavigateIcon
        srouce={require("../../../assets/icons/menu.png")}
        iconStyle={styles.icon}
        alt="menu"
        to="menu"
      />
    </View>
  );
}
