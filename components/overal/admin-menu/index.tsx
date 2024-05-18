import { CLR_BACKDROP } from "../../../styles/globalStyles";
import PressableIcon from "../../utils/pressable-icon";
import NavigateIcon from "../../utils/navigate-icon";
import menuStyle from "../main-menu/styles";
import Modal from "react-native-modal";
import { View } from "react-native";
import { useState } from "react";
import styles from "./styles";

export default function AdminMenu() {
  const [visible, setVisible] = useState(false);

  const handlePress = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <PressableIcon
        srouce={require("../../../assets/icons/active-admin.png")}
        iconStyle={menuStyle.icon}
        onPress={handlePress}
        caption="مدیریت"
        alt="admin"
      />
      <Modal
        onBackdropPress={handlePress}
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
            />
            <NavigateIcon
              srouce={require("../../../assets/icons/order-managment.png")}
              caption="مدیریت غذا ها"
              iconStyle={styles.icon}
              alt="food managment"
              to="foodManagment"
            />
            <NavigateIcon
              srouce={require("../../../assets/icons/smspanel.png")}
              caption="پنل پیامکی"
              iconStyle={styles.icon}
              alt="order managment"
              to="smsPanel"
            />
          </View>
          <View style={styles.row}>
            <NavigateIcon
              srouce={require("../../../assets/icons/food-managment.png")}
              to="notificationManagment"
              iconStyle={styles.icon}
              caption="مدیریت اعلانات"
              alt=""
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
