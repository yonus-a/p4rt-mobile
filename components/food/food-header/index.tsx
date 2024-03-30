import { View, Image, Pressable, useWindowDimensions } from "react-native";
import DayPicker from "../../utils/day-picker";
import Profile from "../../profile";
import styles from "./styles";

export default function FoodHeader({
  setSelectedDay,
  navigation,
  selectedDay,
}) {
  const { width, height } = useWindowDimensions();
  
  return (
    <View style={styles.header}>
      <Image
        source={require("../../../assets/images/overal/map2.png")}
        style={styles.bg}
      />
      <View style={styles.container}>
        <Profile />
        <DayPicker onChange={setSelectedDay} selected={selectedDay} />
        <Pressable onPress={() => navigation.openDrawer()}>
          <Image
            source={require("../../../assets/icons/menu.png")}
            style={styles.menu}
            alt=""
          />
        </Pressable>
      </View>
      <View
        style={[
          styles.circle,
          { width: width * 3, height: height * 3, top: height / 7.6 },
        ]}
      ></View>
    </View>
  );
}
