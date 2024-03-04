import { View, Image, FlatList } from "react-native";
import useCart from "../../../hooks/useCart";
import CustomText from "../../utils/text";
import Counter from "../../utils/counter";
import styles from "./styles";

export default function RenderCartItems({ items }) {
  const { updateItemQuantity, removeItem } = useCart();

  return (
    <View style={styles.renderCartItems}>
      <FlatList
        data={items}
        style={{ backgroundColor: "white" }}
        renderItem={({ item }) => (
          <View style={styles.item} key={item.id}>
            <View style={styles.colRight}>
              <CustomText style={styles.title}>{item.name}</CustomText>
              {item.name !== "چاشت" && (
                <View style={styles.price}>
                  <Counter
                    onIncrement={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                    onDecrement={() =>
                      updateItemQuantity(item.id, item.quantity - 1)
                    }
                    onDelete={() => removeItem(item.id)}
                    showDelete={item.quantity <= 1}
                    count={item.quantity}
                  />
                  <CustomText>{item.price} ریال</CustomText>
                </View>
              )}
            </View>
            <Image
              source={{
                uri: `https://p4rt.ir/public/images/foods/${item.image}`,
              }}
              width={100}
              height={100}
              style={styles.iamge}
            />
          </View>
        )}
      />
    </View>
  );
}
