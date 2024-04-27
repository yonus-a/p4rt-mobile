import orderValidation from "../../../utils/food/orderValidation";
import PrimaryButton from "../../utils/primary-button";
import errorAlert from "../../../utils/alert/error";
import UpdateQuantity from "../update-quantity";
import useClear from "../../../hooks/useClear";
import useCart from "../../../hooks/useCart";
import { View } from "react-native";
import { useState } from "react";
import styles from "./styles";

export default function AddToCart({ food, date, navigation }) {
  // date is safe
  const initialQunatity = food.typeId == 1 ? 1 : 0;
  const [quantity, setQuantity] = useState(initialQunatity);
  const { addItem, inCart } = useCart();

  useClear(() => {
    setQuantity(initialQunatity);
  });

  const handleClick = async (e: any) => {
    // validate order date
    if (!orderValidation(food, date)) {
      await errorAlert("از تاریخ سفارش گذشته است");
      return false;
    }

    // if quantity is 0 do nothing
    if (quantity > 0) {
      addItem({
        orderdFor: food.selectedDay,
        image: food.image,
        price: food.price,
        typeId: food.typeId,
        name: food.name,
        id: food.id,
        quantity,
      });
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
      {!inCart(food.id) ? (
        <PrimaryButton onPress={handleClick} style={styles.btn} title="سفارش" />
      ) : (
        <PrimaryButton
          onPress={() => navigation.navigate("cart")}
          style={styles.btn}
          title="مشاهده سبد"
        />
      )}
    </View>
  );
}
