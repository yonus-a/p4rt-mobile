import PaginationDot from "react-native-animated-pagination-dot";
import Carousel from "react-native-reanimated-carousel";
import { CLR_PRIMARY } from "../../../styles/globalStyles";
import useClear from "../../../hooks/useClear";
import React, { useState } from "react";
import { View, useWindowDimensions } from "react-native";
import styles from "./styles";
import { interpolate } from "react-native-reanimated";

export default function CustomCarousel(props) {
  const [index, setIndex] = useState(0);
  const { width } = useWindowDimensions();
  useClear(() => {
    setIndex(0);
  });

  const animationStyle = React.useCallback((value: number) => {
    "worklet";

    const zIndex = interpolate(value, [-1, 0, 1], [10, 20, 30]);
    const scale = interpolate(value, [-1, 0, 1], [1.25, 1, 0.25]);
    const rotateZ = `${interpolate(value, [-1, 0, 1], [-45, 0, 45])}deg`;
    const translateX = interpolate(value, [-1, 0, 1], [-width, 0, width]);
    const opacity = interpolate(value, [-0.75, 0, 1], [0, 1, 0]);

    return {
      transform: [{ scale }, { rotateZ }, { translateX }],
      zIndex,
      opacity,
    };
  }, []);

  return (
    <View>
      <Carousel
        {...props}
        // mode="parallax"
        customAnimation={animationStyle}
        onProgressChange={(_, absoluteProgress) => {
          setIndex(Math.round(absoluteProgress));
        }}
      />
      {/* <View style={styles.dotWrapper}>
        <PaginationDot
          maxPage={props.data.length}
          activeDotColor={CLR_PRIMARY}
          curPage={index}
        />
      </View> */}
    </View>
  );
}
