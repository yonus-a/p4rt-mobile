import Carousel from "react-native-reanimated-carousel";
import { useWindowDimensions } from "react-native";
import { useEffect, useState } from "react";
import fetchPosts from "./fetchPosts";
import PostCard from "../post-card";
import styles from "./styles";

interface Props {
  take: number;
  categoryId: number;
}

export default function NewPosts({ take, categoryId }: Props) {
  const [posts, setPosts] = useState([]);
  const width = useWindowDimensions().width;

  useEffect(() => {
    fetchPosts(setPosts, { take, categoryId });
  }, []);

  return (
    <Carousel
      data={posts}
      loop={false}
      width={180}
      windowSize={width}
      style={styles.carousel}
      renderItem={({ item }) => <PostCard post={item} />}
      panGestureHandlerProps={{
        activeOffsetX: [-10, 10],
      }}
    />
  );
}
