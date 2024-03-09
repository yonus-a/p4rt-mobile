import Pagination from "../../utils/pagination";
import { View, FlatList } from "react-native";
import CustomText from "../../utils/text";
import PostCard from "../post-card";
import styles from "./styles";

export default function ShowPosts({ posts, maxPage, curPage, setCurPage }) {
  return (
    <View style={styles.showPosts}>
      {posts.length ? (
        <FlatList
          data={[...posts, { pagination: true }]}
          contentContainerStyle={{ gap: 10, paddingBottom: 50 }}
          renderItem={({ item }) => {
            return !item.pagination ? (
              <View style={{ flex: 1, padding: 5 }}>
                <PostCard post={item} key={item.id} style={styles.card} />
              </View>
            ) : (
              <Pagination
                maxPage={maxPage}
                setCurPage={setCurPage}
                curPage={curPage}
                style={{ marginTop: 30 }}
              />
            );
          }}
        />
      ) : (
        <View style={styles.empty}>
          <CustomText>محتوایی برای نمایش وجود ندارد</CustomText>
        </View>
      )}
    </View>
  );
}
