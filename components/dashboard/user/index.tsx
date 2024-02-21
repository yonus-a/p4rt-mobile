import { View, Image } from "react-native";
import Slider from "../slider";
import styles from "./styles";
import PostTab from "../post-tap";

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
