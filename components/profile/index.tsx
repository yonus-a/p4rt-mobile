import { View, Pressable, Image, Animated } from "react-native";
import { useState, useRef } from "react";
import AddAbsentee from "./add-absentee";
import Navigate from "../utils/navigate";
import styles from "./styles";
import Logout from "./logout";

export default function Profile({ navigation }: any) {
  const [expanded, setExpanded] = useState(false);
  const width = useRef(new Animated.Value(40)).current;

  const expand = () => {
    Animated.timing(width, {
      useNativeDriver: false,
      toValue: 217,
      duration: 500,
    }).start();
  };

  const colaps = () => {
    Animated.timing(width, {
      toValue: 40,
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
          source={require("../../assets/icons/avatar.png")}
          style={styles.image}
          height={100}
          width={100}
          alt=""
        />
      </Pressable>
      <View style={styles.drawer}>
        <Logout navigation={navigation} />
        <Navigate to={"notification"}>
          <Image
            source={require("../../assets/icons/divination.png")}
            style={{ width: 40, height: 40 }}
          />
        </Navigate>
        <Navigate to={"notification"}>
          <Image
            source={require("../../assets/icons/notif.png")}
            style={{ width: 40, height: 40 }}
          />
        </Navigate>
        <AddAbsentee />
      </View>
    </Animated.View>
  );
}
