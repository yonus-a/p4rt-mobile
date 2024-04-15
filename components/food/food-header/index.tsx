import { View, Image, Pressable, useWindowDimensions } from "react-native";
import DatePicker from "../../utils/datePicker";
import Profile from "../../profile";
import styles from "./styles";

export default function FoodHeader({
  setSelectedDay,
  selectedDay,
  navigation,
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
        <DatePicker
          onChange={setSelectedDay}
          defaultDate={selectedDay}
          style={{
            paddingHorizontal: 40,
            paddingVertical: 13,
            borderRadius: 100,
          }}
        />
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
