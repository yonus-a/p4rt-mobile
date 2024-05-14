import PressableIcon from "../../utils/pressable-icon";
import { CLR_BACKDROP } from "../../../globalStyles";
import { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";
import Modal from "react-native-modal";
import { View } from "react-native";
import styles from "./styles";

export default function QuickAccess({ visible, handlePress }) {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(spinValue, {
      toValue: visible ? 1 : 0,
      useNativeDriver: true, // To make use of native driver for performance
      duration: 1000,
    }).start();
  }, [visible]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <Modal
      onBackdropPress={handlePress}
      backdropColor={CLR_BACKDROP}
      animationIn="slideInUp"
      animationInTiming={500}
      animationOutTiming={500}
      style={styles.modal}
      isVisible={visible}
      coverScreen={false}
    >
      <Animated.View
        style={[styles.content, { transform: [{ rotate: spin }] }]}
      >
        <PressableIcon
          srouce={require("../../../assets/icons/circle-off.png")}
          iconStyle={styles.icon}
          onPress={() => {}}
          alt="logout"
        />
        <View style={[styles.flexWrapper, { width: "63%" }]}>
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
        <View style={[styles.flexWrapper, { width: "93%" }]}>
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
      </Animated.View>
    </Modal>
  );
}
