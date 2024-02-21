import { View, Image, useWindowDimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { useEffect, useState } from "react";
import styles from "./styles";
import axios from "axios";

export default function Slider() {
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
  }, []);

  return (
    <View>
      <Carousel
        loop
        width={width}
        height={width / 2}
        style={styles.carousel}
        autoPlay={true}
        data={data}
        scrollAnimationDuration={1000}
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
