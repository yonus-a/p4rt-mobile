import { Image, View } from "react-native";
import PostTab from "./post-tap";
import Slider from "./slider";
import styles from "./styles";

export default function UserDashboard() {
  return (
    <View style={styles.userDashboard}>
      <Slider />
      <Image
        style={styles.najva}
        source={require("../../../assets/images/overal/najva.png")}
      />
      <PostTab />
    </View>
  );
}
