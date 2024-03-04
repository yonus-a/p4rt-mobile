import { View, Image, Pressable } from "react-native";
import Profile from "../../profile";
import styles from "./styles";
import CustomText from "../../utils/text";

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
          <CustomText style={styles.text}>نیروی انسانی</CustomText>
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
