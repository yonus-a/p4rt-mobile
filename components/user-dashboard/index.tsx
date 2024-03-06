import { Image, View, ScrollView } from "react-native";
import RefahiPostTab from "./refahi-post-tap";
import GrothPostTab from "./growth-post-tap";
import Container from "../overal/container";
import { useState } from "react";
import Slider from "./slider";
import styles from "./styles";

export default function UserDashboard() {
  const [y, setY] = useState(0);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.userDashboard}>
        <Container>
          <Slider style={{ height: 250 - (y % 100) }} />
          <Image
            style={styles.najva}
            source={require("../../assets/images/overal/najva.png")}
          />
        </Container>
        <ScrollView
          style={{ flex: 1, marginTop: 120 }}
          onScroll={(e: any) => {
            setY(Math.floor(e.nativeEvent.contentOffset.y));
          }}
        >
          <GrothPostTab />
          <RefahiPostTab />
        </ScrollView>
      </View>
    </View>
  );
}
