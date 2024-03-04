import { Pressable, View, Image } from "react-native";
import styles from "./styles";

export default function CarouselNavigation({ carouselRef }) {
  const next = () => {
    carouselRef.current.next();
  };

  const prev = () => {
    carouselRef.current.prev();
  };

  return (
    <>
      <Pressable onPress={next} style={[styles.btn, styles.next]}>
        <Image
          style={styles.image}
          source={require("../../../assets/icons/right.png")}
        />
      </Pressable>
      <Pressable onPress={prev} style={[styles.btn, styles.prev]}>
        <Image
          style={styles.image}
          source={require("../../../assets/icons/left.png")}
        />
      </Pressable>
    </>
  );
}
