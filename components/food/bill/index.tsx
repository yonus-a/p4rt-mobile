import { useNavigation } from "@react-navigation/native";
import errorAlert from "../../../utils/alert/error";
import { Shadow } from "react-native-shadow-2";
import useCart from "../../../hooks/useCart";
import CustomText from "../../utils/text";
import Button from "../../utils/button";
import { View } from "react-native";
import addOrder from "./addOrder";
import styles from "./styles";
import Alert from "../../overal/alert";

export default function Bill({ items }) {
  const { emptyCart } = useCart();
  const navigation: any = useNavigation();

  const handleOrder = async () => {
    try {
      await addOrder(items);
      navigation.navigate("showOrders");
      emptyCart();
    } catch (e) {
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
        <Button style={styles.btn} onPress={handleOrder} title="ثبت" />
      </View>
      <Alert />
    </Shadow>
  );
}
