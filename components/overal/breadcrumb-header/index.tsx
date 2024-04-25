import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Image, Pressable } from "react-native";
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
      pathnaem = "ارسال گزارشات";
      break;
    case "offers":
      pathnaem = "صندوق ایده ها";
      break;
    case "foods":
      pathnaem = "سفارش غذا";
      break;
    case "showOrders":
      pathnaem = "سفارشات";
      break;
    case "showCritics":
      pathnaem = "گزارشات";
      break;
    case "showOffers":
      pathnaem = "ایده ها";
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
    case "post":
      pathnaem = "پست";
      break;
    case "absentee":
      pathnaem = "حضور و غیاب";
      break;
    case "showDailyReports":
      pathnaem = "گزارش نیروی انسانی";
      break;
    case "userManagment":
      pathnaem = "مدیریت کاربران";
      break;
    case "notificationManagment":
      pathnaem = "مدیریت اعلانات";
      break;
    case "editFood":
      pathnaem = "ویرایش غذا";
      break;
    case "editUser":
      pathnaem = "ویرایش کاربران";
      break;
    case "addFood":
      pathnaem = "ایجاد غذا";
      break;
    case "addUser":
      pathnaem = "ایجاد کاربر";
      break;
    case "orderManagment":
      pathnaem = "مدیریت سفارشات";
      break;
    case "foodManagment":
      pathnaem = "مدیریت غذا ها";
      break;
    case "smsPanel":
      pathnaem = "پنل پیامکی";
      break;
    case "posts":
      pathnaem = "پست ها";
      break;
  }

  return (
    <View style={[styles.header]}>
      <Image
        source={require("../../../assets/images/overal/header-map.png")}
        resizeMode="contain"
        style={styles.bg}
      />
      <View style={styles.container}>
        <Profile style={{ marginTop: -6 }} />
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
          marginTop: -130,
          height: 160,
        }}
      />
    </View>
  );
}
