import { View, useWindowDimensions, Animated } from "react-native";
import loopOptions from "../../../utils/slider/loopOptions";
import CustomCarousel from "../../utils/carousel";
import { useEffect, useState } from "react";
import fetchData from "./fetchData";
import styles from "./styles";

export default function Slider({ style = {}, scrollY }) {
  const [data, setData] = useState([]);
  const width = useWindowDimensions().width;

  useEffect(() => {
    fetchData(setData);
  }, []);

  return (
    <Animated.View
      style={{
        height: scrollY.interpolate({
          inputRange: [0, 280],
          outputRange: [280, 200],
          extrapolate: "clamp",
        }),
      }}
    >
      <CustomCarousel
        data={[
          { id: 1, source: require("../../../assets/images/slider/img1.jpg") },
          { id: 2, source: require("../../../assets/images/slider/img2.jpg") },
          { id: 3, source: require("../../../assets/images/slider/img3.jpg") },
        ]}
        style={[styles.carousel, style]}
        {...loopOptions(width)}
        renderItem={({ item }) => (
          <View key={item.id}>
            <Animated.Image
              // source={{
              //   uri: `https://p4rt.ir/public/images/slider/${item.image}`,
              // }}
              source={item.source}
              width={width}
              height={width}
              resizeMode={"cover"}
              style={[
                styles.image,
                {
                  height: scrollY.interpolate({
                    inputRange: [0, 200],
                    outputRange: [400, 200],
                    extrapolate: "clamp",
                  }),
                },
              ]}
            />
          </View>
        )}
      />
    </Animated.View>
  );
}
