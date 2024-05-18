import Video from "react-native-video";
import { View } from "react-native";
import styles from "./styles";

export default function Splash() {
  return (
    <View style={styles.splash}>
      <Video
        source={require("../../assets/videos/logo-motion.mp4")}
        style={styles.logoMotion}
        hideShutterView
      />
    </View>
  );
}
