import { CLR_BACKDROP } from "../../../styles/globalStyles";
import PressableIcon from "../../utils/pressable-icon";
import NavigateIcon from "../../utils/navigate-icon";
import menuStyle from "../main-menu/styles";
import Modal from "react-native-modal";
import { View } from "react-native";
import { useState } from "react";
import styles from "./styles";

export default function AdminMenu({ toggleMainMenu }) {
  const [visible, setVisible] = useState(false);

  const toggleAdminMenu = () => {
    setVisible(!visible);
  };

  const toggleBoth = () => {
    toggleAdminMenu();
    toggleMainMenu();
  };

  return (
    <View>
      <PressableIcon
        srouce={require("../../../assets/icons/active-admin.png")}
        iconStyle={menuStyle.icon}
        onPress={toggleAdminMenu}
        caption="مدیریت"
        alt="admin"
      />
      <Modal
        onBackdropPress={toggleAdminMenu}
        backdropColor={CLR_BACKDROP}
        style={styles.modal}
        isVisible={visible}
      >
        <View style={styles.content}>
          <View style={styles.row}>
            <NavigateIcon
              srouce={require("../../../assets/icons/food-managment.png")}
              caption="مدیریت سفارشات"
              iconStyle={styles.icon}
              alt="order managment"
              to="orderManagment"
              onPress={toggleBoth}
            />
            <NavigateIcon
              srouce={require("../../../assets/icons/order-managment.png")}
              caption="مدیریت غذا ها"
              iconStyle={styles.icon}
              onPress={toggleBoth}
              alt="food managment"
              to="foodManagment"
            />
            <NavigateIcon
              srouce={require("../../../assets/icons/smspanel.png")}
              caption="پنل پیامکی"
              iconStyle={styles.icon}
              onPress={toggleBoth}
              alt="sms panel"
              to="smsPanel"
            />
          </View>
          <View style={styles.row}>
            <NavigateIcon
              srouce={require("../../../assets/icons/food-managment.png")}
              alt="notification managment"
              to="notificationManagment"
              caption="مدیریت اعلانات"
              iconStyle={styles.icon}
              onPress={toggleBoth}
            />
            <NavigateIcon
              srouce={require("../../../assets/icons/ciritics-manager.png")}
              caption="مدیریت گزارشات"
              alt="ciritics managment"
              iconStyle={styles.icon}
              onPress={toggleBoth}
              to="showCritics"
            />
            <NavigateIcon
              srouce={require("../../../assets/icons/user-managment.png")}
              caption="مدیریت کاربران"
              iconStyle={styles.icon}
              onPress={toggleBoth}
              alt="user managment"
              to="userManagment"
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
