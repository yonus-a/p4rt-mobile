import { View, Image, Pressable, Text } from "react-native";
import Profile from "../../profile";
import styles from "./styles";

export default function BreadcrumbHeader({ navigation }) {
  return (
    <View style={styles.header}>
      <Image
        source={require("../../../assets/images/overal/map2.png")}
        style={styles.bg}
      />
      <View style={styles.container}>
        <Profile navigation={navigation} />
        <View style={styles.flexWrapper}>
          <Text style={styles.text}>نیروی انسانی</Text>
          <Pressable onPress={() => navigation.openDrawer()}>
            <Image
              source={require("../../../assets/icons/menu.png")}
              style={styles.menu}
              alt=""
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
