import { Image, View, ScrollView } from "react-native";
import RefahiPostTab from "./refahi-post-tap";
import GrothPostTab from "./growth-post-tap";
import Slider from "./slider";
import styles from "./styles";

export default function UserDashboard() {
  return (
    <View style={styles.userDashboard}>
      <Slider />
      <ScrollView style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: 17 }}>
          <Image
            style={styles.najva}
            source={require("../../assets/images/overal/najva.png")}
          />
        </View>
        <GrothPostTab />
        <RefahiPostTab />
      </ScrollView>
    </View>
  );
}
