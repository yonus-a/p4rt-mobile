import { View, Image, Pressable, useWindowDimensions } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import CustomText from "../../utils/text";
import Profile from "../../profile";
import styles from "./styles";

export default function BreadcrumbHeader() {
  const navigation: any = useNavigation();
  const route = useRoute();
  let pathnaem = "";

  switch (route.name) {
    case "diashboard":
      pathnaem = "داشبورد";
      break;
    case "critics":
      pathnaem = "ارسال انتقادات";
      break;
    case "foods":
      pathnaem = "سفارش غذا";
      break;
    case "showOrders":
      pathnaem = "سفارشات";
      break;
    case "cart":
      pathnaem = "سبد خرید";
      break;
    case "notification":
      pathnaem = "اعلانات";
      break;
    case "showTickets":
      pathnaem = "درخواست ها";
      break;
    case "addTicket":
      pathnaem = "ارسال درخواست";
      break;
    case "divination":
      pathnaem = "فال حافظ";
      break;
    case "پست":
      pathnaem = "فال حافظ";
      break;
    case "پست ها":
      pathnaem = "فال حافظ";
      break;
  }

  return (
    <View style={[styles.header]}>
      <Image
        source={require("../../../assets/images/overal/map2.png")}
        resizeMode="contain"
        style={styles.bg}
      />
      <View style={styles.container}>
        <Profile navigation={navigation} />
        <View style={styles.flexWrapper}>
          <CustomText style={styles.text}>{pathnaem}</CustomText>
          <Pressable onPress={() => navigation.openDrawer()}>
            <Image
              source={require("../../../assets/icons/menu.png")}
              style={styles.menu}
              alt=""
            />
          </Pressable>
        </View>
      </View>
      <Image
        source={require("../../../assets/images/overal/top3.png")}
        resizeMode="cover"
        style={{
          width: "100%",
          marginTop: -120,
          height: 160,
        }}
      />
    </View>
  );
}
