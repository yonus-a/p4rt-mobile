import { View, Pressable, Image, Animated } from "react-native";
import ButtonIcon from "../../utils/button-icon";
import { useState, useRef } from "react";
import Logout from "../../drawer/logout";
import styles from "./styles";

export default function Profile({ naivation }: any) {
  const [expanded, setExpanded] = useState(false);
  const width = useRef(new Animated.Value(55)).current;

  const expand = () => {
    Animated.timing(width, {
      useNativeDriver: false,
      toValue: 250,
      duration: 500,
    }).start();
  };

  const colaps = () => {
    Animated.timing(width, {
      toValue: 55,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const handleExpand = (e) => {
    e.stopPropagation();

    if (expanded) {
      colaps();
    } else {
      expand();
    }

    setExpanded(!expanded);
  };

  return (
    <Animated.View style={[styles.profile, { width: width }]}>
      <Pressable onPress={handleExpand}>
        <Image
          source={require("../../../assets/icons/avatar.png")}
          style={styles.image}
          height={100}
          width={100}
          alt=""
        />
      </Pressable>
      <View style={styles.drawer}>
        <Logout />
        <ButtonIcon
          source={require("../../../assets/icons/divination.png")}
          onPress={() => {}}
          height={50}
          width={50}
          alt=""
        />
        <ButtonIcon
          source={require("../../../assets/icons/notif.png")}
          onPress={() => {}}
          height={50}
          width={50}
          alt=""
        />
        <ButtonIcon
          source={require("../../../assets/icons/done.png")}
          onPress={() => {}}
          height={50}
          width={50}
          alt=""
        />
      </View>
    </Animated.View>
  );
}
