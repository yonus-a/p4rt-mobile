import { View, Image, useWindowDimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import Navigate from "../../utils/navigate";
import { useEffect, useState } from "react";
import CustomText from "../../utils/text";
import fetchData from "./fetchData";
import styles from "./styles";

export default function TopPosts() {
  const [posts, setPosts] = useState([]);
  const { width } = useWindowDimensions();

  useEffect(() => {
    fetchData(setPosts);
  }, []);

  return (
    <View style={styles.topPosts}>
      <View style={styles.flexWrapper}>
        <CustomText>پست ها برتر</CustomText>
        <Navigate to={"#"} style={styles.more}>
          <CustomText>همه</CustomText>
          <Image
            source={require("../../../assets/icons/chevron-left.png")}
            style={styles.icon}
          />
        </Navigate>
      </View>
      <Carousel
        data={posts}
        loop={true}
        width={160}
        autoPlayReverse
        windowSize={width - 40}
        height={130}
        style={styles.carousel}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <CustomText style={styles.title}>{item.title}</CustomText>
            <Image
              source={{ uri: `https://p4rt.ir/public/images/${item.image}` }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        )}
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10],
        }}
      />
    </View>
  );
}
