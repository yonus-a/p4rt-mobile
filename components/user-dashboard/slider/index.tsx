import { View, Image, useWindowDimensions } from "react-native";
import loopOptions from "../../../utils/slider/loopOptions";
import Carousel from "react-native-reanimated-carousel";
import { useEffect, useState } from "react";
import styles from "./styles";
import axios from "axios";

export default function Slider({ style = {} }) {
  const [data, setData] = useState([]);
  const width = useWindowDimensions().width;

  async function fetchData() {
    try {
      const { data } = await axios.get("/dashboard/getSlides");
      setData(data);
    } catch (e) {}
  }

  useEffect(() => {
    fetchData();
    
    return () => {
      setData([]);
    };
  }, []);

  return (
    <View>
      <Carousel
        data={data}
        style={[styles.carousel, style]}
        {...loopOptions(width)}
        renderItem={({ item }) => (
          <View>
            <Image
              source={{
                uri: `https://p4rt.ir/public/images/slider/${item.image}`,
              }}
              width={width}
              height={width}
              style={styles.image}
            />
          </View>
        )}
      />
    </View>
  );
}
