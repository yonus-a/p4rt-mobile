import { View, Image, FlatList, Pressable } from "react-native";
import { Shadow } from "react-native-shadow-2";
import useCart from "../../../hooks/useCart";
import CustomText from "../../utils/text";
import Counter from "../../utils/counter";
import styles from "./styles";
import { useState } from "react";

export default function RenderCartItems({ items }) {
  const { updateItemQuantity, removeItem } = useCart();
  const [active, setActive] = useState(0);

  return (
    <View style={styles.renderCartItems}>
      <FlatList
        data={items}
        renderItem={({ item, index }) => (
          <View style={{ flex: 1, padding: 10 }} key={item.id}>
            <Shadow distance={8} style={styles.item}>
              <View style={styles.flexWrapper}>
                <View style={styles.colRight}>
                  <CustomText style={styles.title}>{item.name}</CustomText>
                  {item.typeId !== 1 && (
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
              <View style={styles.shiftWrapper}>
                <Pressable
                  onPress={() => {
                    items[index].shift = 1;
                    setActive(1);
                  }}
                  style={[
                    styles.shiftBtn,
                    active === 1 ? styles.activeShift : {},
                  ]}
                >
                  <CustomText style={active === 1 ? styles.activeShift : {}}>
                    شیفت صبح
                  </CustomText>
                </Pressable>
                <Pressable
                  onPress={() => {
                    items[index].shift = 2;
                    setActive(2);
                  }}
                  style={[
                    styles.shiftBtn,
                    active === 2 ? styles.activeShift : {},
                  ]}
                >
                  <CustomText>شیفت عصر</CustomText>
                </Pressable>
              </View>
            </Shadow>
          </View>
        )}
      />
    </View>
  );
}
