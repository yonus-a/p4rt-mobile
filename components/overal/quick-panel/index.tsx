import { Animated, useWindowDimensions, View } from "react-native";
import PressableIcon from "../../utils/pressable-icon";
import NavigateIcon from "../../utils/navigate-icon";
import { useEffect, useRef, useState } from "react";
import QuickAccess from "../quick-access";
import MainMenu from "../main-menu";
import styles from "./styles";

export default function Menu() {
  const marginTop = useRef(new Animated.Value(0)).current;
  const [visible, setVisible] = useState(false);
  const { height } = useWindowDimensions();

  const handlePress = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    Animated.timing(marginTop, {
      toValue: visible ? -100 : 1,
      useNativeDriver: false,
      duration: 500,
    }).start();
  }, [visible]);

  return (
    <View
      style={
        visible
          ? {
              height,
              ...styles.backDrop,
            }
          : {}
      }
    >
      <QuickAccess visible={visible} handlePress={handlePress} />
      <View style={styles.quickPanel}>
        <MainMenu />
        <NavigateIcon
          srouce={require("../../../assets/icons/food.png")}
          iconStyle={styles.icon}
          alt="order foods"
          to="foods"
        />
        <Animated.View style={{ marginTop }}>
          <PressableIcon
            srouce={require("../../../assets/images/overal/logo.png")}
            iconStyle={styles.logo}
            onPress={handlePress}
            alt="menu"
          />
        </Animated.View>
        <NavigateIcon
          srouce={require("../../../assets/icons/send.png")}
          iconStyle={styles.icon}
          alt="send ciritics"
          to="critics"
        />
        <NavigateIcon
          srouce={require("../../../assets/icons/home.png")}
          iconStyle={styles.icon}
          to="dashboard"
          alt="home"
        />
      </View>
    </View>
  );
}
