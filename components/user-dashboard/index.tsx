import { Image, View, ScrollView } from "react-native";
import RefahiPostTab from "./refahi-post-tap";
import GrothPostTab from "./growth-post-tap";
import Slider from "./slider";
import styles from "./styles";

export default function UserDashboard() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.userDashboard}>
        <Slider />
        <Image
          style={styles.najva}
          source={require("../../assets/images/overal/najva.png")}
        />
        <GrothPostTab />
        <RefahiPostTab />
      </ScrollView>
    </View>
  );
}
