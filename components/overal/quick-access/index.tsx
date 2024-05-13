import PressableIcon from "../../utils/pressable-icon";
import Modal from "react-native-modal";
import { TouchableWithoutFeedback, View } from "react-native";
import { useState } from "react";
import styles from "./styles";

export default function QuickAccess({ visible, setVisible }) {
  const handlePress = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.quickAccess}>
      <PressableIcon
        srouce={require("../../../assets/images/overal/logo.png")}
        iconStyle={styles.logo}
        onPress={handlePress}
        alt="menu"
      />
      <Modal
        onBackdropPress={handlePress}
        style={styles.modal}
        isVisible={visible}
        animationIn="wobble"
        customBackdrop={
          <TouchableWithoutFeedback
            onPress={handlePress}
            style={styles.backDrop}
          >
            <View style={styles.backDrop} />
          </TouchableWithoutFeedback>
        }
      >
        <View style={styles.content}>
          <PressableIcon
            srouce={require("../../../assets/icons/circle-off.png")}
            iconStyle={styles.icon}
            onPress={() => {}}
            alt="logout"
          />
          <View style={[styles.flexWrapper, { width: "79%" }]}>
            <PressableIcon
              srouce={require("../../../assets/icons/circle-done.png")}
              iconStyle={styles.icon}
              onPress={() => {}}
              alt="done"
            />
            <PressableIcon
              srouce={require("../../../assets/icons/circle-notif.png")}
              iconStyle={styles.icon}
              onPress={() => {}}
              alt="notification"
            />
          </View>
          <View style={styles.flexWrapper}>
            <PressableIcon
              srouce={require("../../../assets/icons/circle-search.png")}
              iconStyle={styles.icon}
              onPress={() => {}}
              alt="search"
            />
            <PressableIcon
              srouce={require("../../../assets/icons/circle-question.png")}
              iconStyle={styles.icon}
              onPress={() => {}}
              alt="divination"
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
