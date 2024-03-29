import PaginationDot from "react-native-animated-pagination-dot";
import Carousel from "react-native-reanimated-carousel";
import React, { useState } from "react";
import { View } from "react-native";
import styles from "./styles";

export default function CustomCarousel(props) {
  const [index, setIndex] = useState(0);

  return (
    <View style={styles.carousel}>
      <Carousel
        {...props}
        onProgressChange={(_, absoluteProgress) => {
          setIndex(Math.round(absoluteProgress));
        }}
      />
      <View style={{ alignItems: "center", marginVertical: 7 }}>
        <PaginationDot
          maxPage={props.data.length}
          activeDotColor="#969696"
          curPage={index}
        />
      </View>
    </View>
  );
}
