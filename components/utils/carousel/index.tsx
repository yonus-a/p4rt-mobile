import PaginationDot from "react-native-animated-pagination-dot";
import Carousel from "react-native-reanimated-carousel";
import { CLR_PRIMARY } from "../../../globalStyles";
import useClear from "../../../hooks/useClear";
import React, { useState } from "react";
import { View } from "react-native";

export default function CustomCarousel(props) {
  const [index, setIndex] = useState(0);

  useClear(() => {
    setIndex(0);
  });

  return (
    <View>
      <Carousel
        {...props}
        onProgressChange={(_, absoluteProgress) => {
          setIndex(Math.round(absoluteProgress));
        }}
      />
      <View style={{ alignItems: "center", marginVertical: 7 }}>
        <PaginationDot
          maxPage={props.data.length}
          activeDotColor={CLR_PRIMARY}
          curPage={index}
        />
      </View>
    </View>
  );
}
