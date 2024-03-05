import {
  View,
  Image,
  Pressable,
  ImageBackground,
  useWindowDimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomText from "../../utils/text";
import Profile from "../../profile";
import styles from "./styles";

export default function BreadcrumbHeader() {
  const { width, height } = useWindowDimensions();
  const navigation: any = useNavigation();

  return (
    <View style={styles.header}>
      <Image
        source={require("../../../assets/images/overal/map2.png")}
        resizeMode="contain"
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
      <View
        style={[styles.circle, { width: width * 3, height: height * 3 }]}
      ></View>
    </View>
  );
}
