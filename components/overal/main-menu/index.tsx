import { CLR_BACKDROP } from "../../../styles/globalStyles";
import PressableIcon from "../../utils/pressable-icon";
import NavigateIcon from "../../utils/navigate-icon";
import menuStyles from "../quick-panel/styles";
import useAdmin from "../../../hooks/useAdmin";
import Modal from "react-native-modal";
import AdminMenu from "../admin-menu";
import { View } from "react-native";
import { useState } from "react";
import styles from "./styles";

export default function MainMenu() {
  const [visible, setVisible] = useState(false);
  const admin = useAdmin();

  const toggleMainMenu = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <PressableIcon
        srouce={require("../../../assets/icons/menu.png")}
        iconStyle={menuStyles.icon}
        onPress={toggleMainMenu}
        alt="menu"
      />
      <Modal
        onBackdropPress={toggleMainMenu}
        backdropColor={CLR_BACKDROP}
        style={styles.modal}
        isVisible={visible}
      >
        <View style={styles.content}>
          <View style={styles.row}>
            <NavigateIcon
              srouce={require("../../../assets/icons/active-home.png")}
              iconStyle={styles.icon}
              onPress={toggleMainMenu}
              alt="dashboard"
              to="dashboard"
              caption="خانه"
            />
            <NavigateIcon
              srouce={require("../../../assets/icons/active-book.png")}
              iconStyle={styles.icon}
              onPress={toggleMainMenu}
              caption="قرآن"
              alt="quran"
              to="quran"
            />
            <NavigateIcon
              srouce={require("../../../assets/icons/report.png")}
              iconStyle={styles.icon}
              onPress={toggleMainMenu}
              caption="ارسال گزارش"
              to="critics"
              alt="critics"
            />
          </View>
          <View style={styles.row}>
            <NavigateIcon
              srouce={require("../../../assets/icons/posts.png")}
              iconStyle={styles.icon}
              onPress={toggleMainMenu}
              caption="پست ها"
              to="posts"
              alt="report"
            />
            <NavigateIcon
              srouce={require("../../../assets/icons/active-food.png")}
              iconStyle={styles.icon}
              onPress={toggleMainMenu}
              caption="غذا"
              alt="foods"
              to="foods"
            />
            <NavigateIcon
              srouce={require("../../../assets/icons/active-send.png")}
              iconStyle={styles.icon}
              onPress={toggleMainMenu}
              caption="درخواست ها"
              to="showTickets"
              alt="report"
            />
          </View>
          <View style={styles.row}>
            {admin && <AdminMenu toggleMainMenu={toggleMainMenu} />}
            <NavigateIcon
              srouce={require("../../../assets/icons/active-notification.png")}
              iconStyle={styles.icon}
              onPress={toggleMainMenu}
              caption="اعلانات"
              to="notification"
              alt="notification"
            />
            <NavigateIcon
              srouce={require("../../../assets/icons/active-orders.png")}
              iconStyle={styles.icon}
              onPress={toggleMainMenu}
              caption="سفارشات من"
              to="showOrders"
              alt="orders"
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
