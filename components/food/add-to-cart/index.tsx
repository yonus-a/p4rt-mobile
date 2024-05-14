import orderValidation from "../../../utils/food/orderValidation";
import PrimaryButton from "../../utils/primary-button";
import errorAlert from "../../../utils/alert/error";
import UpdateQuantity from "../update-quantity";
import useClear from "../../../hooks/useClear";
import { View } from "react-native";
import { useState } from "react";
import styles from "./styles";

export default function AddToCart({ food, date, navigation }) {
  // date is safe
  const initialQunatity = food.typeId == 1 ? 1 : 0;
  const [quantity, setQuantity] = useState(initialQunatity);

  useClear(() => {
    setQuantity(initialQunatity);
  });

  const handleClick = async (e: any) => {
    // validate order date
    if (!orderValidation(food, date)) {
      await errorAlert("از تاریخ سفارش گذشته است");
      return false;
    }
  };

  return (
    <View style={styles.addToCart}>
      {food.typeId !== 1 && (
        <UpdateQuantity
          setQuantity={setQuantity}
          quantity={quantity}
          itemId={food.id}
        />
      )}
     
    </View>
  );
}
