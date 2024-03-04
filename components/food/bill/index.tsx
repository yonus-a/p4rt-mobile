import errorAlert from "../../../utils/alert/error";
import useCart from "../../../hooks/useCart";
import CustomText from "../../utils/text";
import Button from "../../utils/button";
import { View } from "react-native";
import addOrder from "./addOrder";
import styles from "./styles";

export default function Bill({ items }) {
  const { emptyCart } = useCart();

  const handleOrder = async () => {
    try {
      await addOrder(items);
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
    <View style={styles.bill}>
      <CustomText>اطلاعات پرداخت</CustomText>
      <View style={styles.price}>
        <CustomText>{totoalPrice} ریال</CustomText>
        <CustomText>مبلغ قابل پرداخت:</CustomText>
      </View>
      <Button style={styles.btn} onPress={handleOrder} title="ثبت" />
    </View>
  );
}
