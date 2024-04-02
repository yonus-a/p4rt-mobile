import { View, Pressable, Image, Animated } from "react-native";
import * as SecureStore from "expo-secure-store";
import AddAbsentee from "./add-absentee";
import Navigate from "../utils/navigate";
import useExpanded from "./useExpaned";
import styles from "./styles";
import Logout from "./logout";

export default function Profile({ style = {} }) {
  const { width, handleExpand } = useExpanded();
  const profile = SecureStore.getItem("profile");

  return (
    <Animated.View style={[styles.profile, { width: width }, style]}>
      <Pressable onPress={handleExpand}>
        {/* <Image
          source={require("../../assets/icons/avatar.png")}
          style={styles.image}
          alt=""
        /> */}
        <Image
          source={{
            uri: `https://p4rt.ir/public/images/users/${profile}`,
          }}
          resizeMode="cover"
          style={styles.image}
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
