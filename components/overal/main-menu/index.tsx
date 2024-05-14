import PressableIcon from "../../utils/pressable-icon";
import NavigateIcon from "../../utils/navigate-icon";
import menuStyles from "../quick-panel/styles";
import Modal from "react-native-modal";
import { View } from "react-native";
import { useState } from "react";
import styles from "./styles";

export default function MainMenu() {
  const [visible, setVisible] = useState(false);

  const handlePress = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <PressableIcon
        srouce={require("../../../assets/icons/menu.png")}
        iconStyle={menuStyles.icon}
        onPress={handlePress}
        alt="menu"
      />
      <Modal
        onBackdropPress={handlePress}
        style={styles.modal}
        isVisible={visible}
      >
        <View style={styles.content}>
          <View style={styles.row}>
            <NavigateIcon
              srouce={require("../../../assets/icons/active-home.png")}
              iconStyle={styles.icon}
              alt="dashboard"
              to="dashboard"
              caption="خانه"
            />
            <NavigateIcon
              srouce={require("../../../assets/icons/active-book.png")}
              iconStyle={styles.icon}
              caption="قرآن"
              alt="quran"
              to="quran"
            />
            <NavigateIcon
              srouce={require("../../../assets/icons/report.png")}
              iconStyle={styles.icon}
              caption="ارسال گزارش"
              to="sendReport"
              alt="report"
            />
          </View>
          <View style={styles.row}>
            <NavigateIcon
              srouce={require("../../../assets/icons/posts.png")}
              iconStyle={styles.icon}
              caption="پست ها"
              to="activePosts"
              alt="report"
            />
            <NavigateIcon
              srouce={require("../../../assets/icons/active-food.png")}
              iconStyle={styles.icon}
              caption="غذا"
              alt="foods"
              to="foods"
            />
            <NavigateIcon
              srouce={require("../../../assets/icons/active-send.png")}
              iconStyle={styles.icon}
              caption="درخواست ها"
              to="sendReport"
              alt="report"
            />
          </View>
          <View style={styles.row}>
            <NavigateIcon
              srouce={require("../../../assets/icons/active-admin.png")}
              iconStyle={styles.icon}
              caption="مدیریت"
              to="admin"
              alt="admin"
            />
            <NavigateIcon
              srouce={require("../../../assets/icons/active-notification.png")}
              iconStyle={styles.icon}
              caption="اعلانات"
              to="notification"
              alt="notification"
            />
            <NavigateIcon
              srouce={require("../../../assets/icons/active-orders.png")}
              iconStyle={styles.icon}
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
