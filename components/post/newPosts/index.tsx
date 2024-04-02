import Carousel from "react-native-reanimated-carousel";
import { useWindowDimensions, View } from "react-native";
import { useEffect, useState } from "react";
import fetchPosts from "./fetchPosts";
import PostCard from "../post-card";
import styles from "./styles";

export default function NewPosts({ take, categoryId }) {
  const [posts, setPosts] = useState([]);
  const width = useWindowDimensions().width;

  useEffect(() => {
    fetchPosts(setPosts, { take, categoryId });
  }, []);

  return (
    <Carousel
      data={posts}
      loop={true}
      width={180}
      autoPlayReverse
      windowSize={width}
      style={styles.carousel}
      renderItem={({ item }) => (
        <View>
          <PostCard post={item} />
        </View>
      )}
      panGestureHandlerProps={{
        activeOffsetX: [-10, 10],
      }}
    />
  );
}
