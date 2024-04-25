import loopOptions from "../../../utils/slider/loopOptions";
import { View, useWindowDimensions } from "react-native";
import CustomCarousel from "../../utils/carousel";
import { useEffect, useState } from "react";
import { Image } from "react-native";
import fetchData from "./fetchData";
import styles from "./styles";

export default function Slider({ style = {} }) {
  const [data, setData] = useState([]);
  const width = useWindowDimensions().width - 40;

  useEffect(() => {
    fetchData(setData);
  }, []);

  return (
    <View style={styles.slider}>
      <CustomCarousel
        data={data}
        style={[styles.carousel, style]}
        {...loopOptions(width)}
        renderItem={({ item }) => (
          <View key={item.id}>
            <Image
              source={{
                uri: `https://p4rt.ir/public/images/slider/${item.image}`,
              }}
              width={width}
              height={width / 2}
              resizeMode={"cover"}
              style={[styles.image]}
            />
          </View>
        )}
      />
    </View>
  );
}
