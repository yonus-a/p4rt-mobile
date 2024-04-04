import { Image, Pressable } from "react-native";
import styles from "./styles";

export default function CarouselNavigation({ carouselRef, countFoods }) {
  const next = () => {
    carouselRef.current.next();
  };

  const prev = () => {
    carouselRef.current.prev();
  };

  const customStyle = {
    opacity: countFoods <= 1 ? 0.3 : 1,
  };

  return (
    <>
      <Pressable onPress={next} style={[styles.btn, styles.next, customStyle]}>
        <Image
          style={styles.image}
          source={require("../../../assets/icons/right.png")}
        />
      </Pressable>
      <Pressable onPress={prev} style={[styles.btn, styles.prev, customStyle]}>
        <Image
          style={styles.image}
          source={require("../../../assets/icons/left.png")}
        />
      </Pressable>
    </>
  );
}
