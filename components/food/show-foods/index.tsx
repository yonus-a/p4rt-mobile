import Carousel from "react-native-reanimated-carousel";
import { View, useWindowDimensions } from "react-native";
import ShowComments from "../show-comments";
import FoodImage from "../food-image";
import AddToCart from "../add-to-cart";
import styles from "./styles";

export default function ShowFoods({ foods, navigation }) {
  const { width, height } = useWindowDimensions();
s
  return (
    <Carousel
      data={foods}
      loop={false}
      style={styles.wrapper}
      width={width}
      enabled={false}
      renderItem={({ item }: any) => (
        <View key={item.id} style={{ flex: 1 }}>
          <FoodImage
            source={{
              uri: `https://p4rt.ir/public/images/foods/${item.image}`,
            }}
          />
          <AddToCart food={item} date={new Date()} navigation={navigation} />
          <ShowComments data={item.food_comment} />
        </View>
      )}
    />
  );
}
