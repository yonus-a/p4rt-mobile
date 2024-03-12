import { View, Pressable, Image, Animated } from "react-native";
import AddAbsentee from "./add-absentee";
import Navigate from "../utils/navigate";
import useExpanded from "./useExpaned";
import styles from "./styles";
import Logout from "./logout";

export default function Profile() {
  const { width, handleExpand } = useExpanded();

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
        <Logout />
        <Navigate to={"divination"}>
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
