import { Pressable, useWindowDimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import Container from "../../overal/container";
import CarouselNavigation from "../navigation";
import ShowComments from "../show-comments";
import FoodImage from "../food-image";
import AddToCart from "../add-to-cart";
import styles from "./styles";
import { useRef } from "react";

export default function ShowFoods({ foods, navigation }) {
  const { width, height } = useWindowDimensions();
  const carouselRef: any = useRef();

  return (
    <>
      <CarouselNavigation carouselRef={carouselRef} />
      <Carousel
        ref={carouselRef}
        data={foods}
        loop={false}
        width={width}
        enabled={false}
        style={styles.carousel}
        renderItem={({ item }: any) => (
          <Container key={item.id} style={styles.item}>
            <FoodImage
              source={{
                uri: `https://p4rt.ir/public/images/foods/${item.image}`,
              }}
            />
            <AddToCart food={item} date={new Date()} navigation={navigation} />
            <ShowComments data={item.food_comment} />
          </Container>
        )}
      />
    </>
  );
}
