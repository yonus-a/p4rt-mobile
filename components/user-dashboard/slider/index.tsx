import loopOptions from "../../../utils/slider/loopOptions";
import { View, useWindowDimensions } from "react-native";
import CustomCarousel from "../../utils/carousel";
import { useEffect, useState } from "react";
import { Image } from "react-native";
import fetchData from "./fetchData";
import styles from "./styles";

export default function Slider() {
  const [data, setData] = useState([]);
  const width = useWindowDimensions().width - 50;

  useEffect(() => {
    fetchData(setData);
  }, []);

  return (
    <CustomCarousel
      data={data}
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
            style={styles.image}
          />
        </View>
      )}
    />
  );
}
