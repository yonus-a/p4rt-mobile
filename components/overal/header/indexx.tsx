import { useNavigation } from "@react-navigation/native";
import { View, Image, Pressable } from "react-native";
import Profile from "../../profile";
import styles from "./styles";

export default function Header() {
  const navigation: any = useNavigation();

  return (
    <View style={styles.header}>
      <Image
        source={require("../../../assets/images/overal/map2.png")}
        style={styles.bg}
      />
      <View style={styles.container}>
        <Profile />
        <Pressable onPress={() => navigation.openDrawer()}>
          <Image
            source={require("../../../assets/icons/menu.png")}
            style={styles.menu}
            alt=""
          />
        </Pressable>
      </View>
    </View>
  );
}
