import { View, FlatList } from "react-native";
import PostCard from "../post-card";
import styles from "./styles";

export default function ShowSearchedPosts({ data }) {
  return (
    <View style={styles.showPosts}>
      <FlatList
        data={data.posts}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View style={{ flex: 1, padding: 5 }} key={item.id}>
              <PostCard post={item} key={item.id} style={styles.card} />
            </View>
          );
        }}
      />
    </View>
  );
}
