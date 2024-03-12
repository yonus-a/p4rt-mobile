import Pagination from "../../utils/pagination";
import { View, FlatList } from "react-native";
import CustomText from "../../utils/text";
import PostCard from "../post-card";
import styles from "./styles";

export default function ShowPosts({ data, page, setPage, take }) {
  return (
    <View style={styles.showPosts}>
      {data.posts.length ? (
        <FlatList
          data={[...data.posts, { pagination: true }]}
          contentContainerStyle={{ gap: 10, paddingBottom: 50 }}
          renderItem={({ item }) => {
            return !item.pagination ? (
              <View style={{ flex: 1, padding: 5 }}>
                <PostCard post={item} key={item.id} style={styles.card} />
              </View>
            ) : (
              <Pagination
                style={{ marginTop: 30 }}
                countItems={data}
                setPage={setPage}
                page={page}
                take={take}
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
