import Carousel from "react-native-reanimated-carousel";
import { useWindowDimensions } from "react-native";
import useUserId from "../../../hooks/useUserId";
import Container from "../../overal/container";
import CarouselNavigation from "../navigation";
import ShowComments from "../show-comments";
import FoodImage from "../food-image";
import AddToCart from "../add-to-cart";
import styles from "./styles";
import { useRef } from "react";

export default function ShowFoods({ foods, navigation }) {
  const { width } = useWindowDimensions();
  const carouselRef: any = useRef();
  const userId = useUserId();

  return (
    <>
      <CarouselNavigation carouselRef={carouselRef} countFoods={foods.length} />
      <Carousel
        ref={carouselRef}
        data={foods}
        loop={false}
        width={width}
        enabled={false}
        style={styles.carousel}
        renderItem={({ item }: any) => {
          const Defaultliked = !!item.food_like.find(
            (item: any) => item.userId === userId
          );

          return (
            <Container key={item.id} style={styles.item}>
              <FoodImage
                liked={Defaultliked}
                likes={item.food_like.length || 0}
                foodId={item.id}
                source={{
                  uri: `https://p4rt.ir/public/images/foods/${item.image}`,
                }}
              />
              <AddToCart
                food={item}
                date={new Date()}
                navigation={navigation}
              />
              <ShowComments data={item.food_comment} />
            </Container>
          );
        }}
      />
    </>
  );
}
