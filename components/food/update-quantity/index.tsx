import useCart from "../../../hooks/useCart";
import Counter from "../../utils/counter";
import { View } from "react-native";
import styles from "./styles";

interface Props {
  quantity: number;
  setQuantity: any;
  itemId: string;
}

export default function UpdateQuantity({
  setQuantity,
  quantity,
  itemId,
}: Props) {
  const { updateItemQuantity, removeItem, getItem, inCart } = useCart();
  const cartQuantity = getItem(itemId)?.quantity;

  return (
    <View style={styles.updateQuantity}>
      {!inCart(itemId) ? (
        <Counter
          onIncrement={() => setQuantity(quantity + 1)}
          onDecrement={() => {
            quantity > 0 && setQuantity(quantity - 1);
          }}
          count={quantity}
        />
      ) : (
        <Counter
          onIncrement={() => updateItemQuantity(itemId, cartQuantity + 1)}
          onDecrement={() => updateItemQuantity(itemId, cartQuantity - 1)}
          onDelete={() => {
            removeItem(itemId);
            setQuantity(1);
          }}
          showDelete={cartQuantity <= 1}
          count={cartQuantity}
        />
      )}
    </View>
  );
}
