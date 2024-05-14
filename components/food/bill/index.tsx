import { useNavigation } from "@react-navigation/native";
import PrimaryButton from "../../utils/primary-button";
import errorAlert from "../../../utils/alert/error";
import { Shadow } from "react-native-shadow-2";
import CustomText from "../../utils/text";
import { View } from "react-native";
import addOrder from "./addOrder";
import styles from "./styles";

export default function Bill({ items }) {
  const navigation: any = useNavigation();

  const handleOrder = async () => {
    try {
      const { data } = await addOrder(items);

      if (data.result?.error) {
        return await errorAlert(data.result?.error);
      }

      navigation.navigate("showOrders");
    } catch (e) {
      console.log(e);
      await errorAlert();
    }
  };

  const totoalPrice = items.reduce(
    (acc: any, { price, quantity }: any) => acc + +price * quantity,
    0
  );

  return (
    <Shadow style={{ width: "100%" }} distance={1}>
      <View style={styles.bill}>
        <CustomText>اطلاعات پرداخت</CustomText>
        <View style={styles.price}>
          <CustomText>{totoalPrice} ریال</CustomText>
          <CustomText>مبلغ قابل پرداخت:</CustomText>
        </View>
        <PrimaryButton style={styles.btn} onPress={handleOrder} title="ثبت" />
      </View>
    </Shadow>
  );
}
