import PaginationDot from "react-native-animated-pagination-dot";
import { Pressable, View, Image } from "react-native";
import styles from "./styles";

export default function Pagination({
  countItems,
  style = {},
  setPage,
  page,
  take,
}) {
  return (
    <View style={[styles.container, style]}>
      <Pressable onPress={() => setPage(page - 1)}>
        <Image
          source={require("../../../assets/icons/chevron-left.png")}
          style={styles.icon}
          alt="prev"
        />
      </Pressable>
      <PaginationDot
        activeDotColor={"black"}
        maxPage={Math.round(countItems / take) || 1}
        curPage={page}
      />
      <Pressable onPress={() => setPage(page + 1)}>
        <Image
          source={require("../../../assets/icons/chevron-right.png")}
          style={styles.icon}
          alt="next"
        />
      </Pressable>
    </View>
  );
}
