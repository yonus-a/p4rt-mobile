import { Image, View, Animated } from "react-native";
import RefahiPostTab from "./refahi-post-tap";
import GrothPostTab from "./growth-post-tap";
import { useRef } from "react";
import Slider from "./slider";
import styles from "./styles";

export default function UserDashboard() {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.userDashboard}>
        <View style={{ paddingHorizontal: 20 }}>
          <Slider scrollY={scrollY} />
          <Image
            source={require("../../assets/icons/3dots.png")}
            style={{
              alignSelf: "center",
              height: 10,
              marginBottom: -10,
              marginTop: 10,
            }}
          />
          <Image
            style={styles.najva}
            source={require("../../assets/images/overal/najva.png")}
          />
        </View>
        <Animated.ScrollView
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={16}
        >
          <GrothPostTab />
          <RefahiPostTab />
        </Animated.ScrollView>
      </View>
    </View>
  );
}
