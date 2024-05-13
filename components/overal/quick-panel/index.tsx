import NavigateIcon from "../../utils/navigate-icon";
import QuickAccess from "../quick-access";
import MainMenu from "../main-menu";
import { View } from "react-native";
import { useState } from "react";
import styles from "./styles";

export default function Menu() {
  const [visible, setVisible] = useState(false);

  return (
    <View style={{ position: "relative" }}>
      <View
        style={[
          styles.quickPanel,
          {
            position: "relative",
            zIndex: 1000,
            bottom: 0,
            right: 0,
            left: 0,
          },
        ]}
      >
        <MainMenu />
        <NavigateIcon
          srouce={require("../../../assets/icons/food.png")}
          iconStyle={styles.icon}
          alt="order foods"
          to="foods"
        />
        <QuickAccess visible={visible} setVisible={setVisible} />
        <NavigateIcon
          srouce={require("../../../assets/icons/send.png")}
          iconStyle={styles.icon}
          alt="send ciritics"
          to="ciritics"
        />
        <NavigateIcon
          srouce={require("../../../assets/icons/home.png")}
          iconStyle={styles.icon}
          alt="home"
          to="home"
        />
      </View>
    </View>
  );
}
