import orderValidation from "../../../utils/food/orderValidation";
import PrimaryButton from "../../utils/primary-button";
import errorAlert from "../../../utils/alert/error";
import UpdateQuantity from "../update-quantity";
import useCart from "../../../hooks/useCart";
import { View } from "react-native";
import { useState } from "react";
import styles from "./styles";

export default function AddToCart({ food, date, navigation }) {
  const defaultQuantity = food.name == "چاشت" ? 1 : 0;
  const [quantity, setQuantity] = useState(defaultQuantity);
  const { addItem, inCart } = useCart();

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
        name: food.name,
        id: food.id,
        quantity,
      });
    }
  };

  return (
    <View style={styles.addToCart}>
      {food.name !== "چاشت" && (
        <UpdateQuantity
          setQuantity={setQuantity}
          quantity={quantity}
          itemId={food.id}
        />
      )}
      {!inCart(food.id) ? (
        <PrimaryButton
          onPress={handleClick}
          style={{ borderRadius: 100 }}
          title="سفارش"
        />
      ) : (
        <PrimaryButton
          onPress={() => navigation.navigate("cart")}
          style={{ borderRadius: 100 }}
          title="مشاهده سبد"
        />
      )}
    </View>
  );
}
