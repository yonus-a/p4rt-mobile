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
  const maxPage = Math.round(countItems / take) || 1;

  return (
    <View style={[styles.container, style]}>
      <Pressable
        onPress={() => {
          const prevPage = page - 1;
          if (prevPage > 0) {
            setPage(prevPage);
          }
        }}
      >
        <Image
          source={require("../../../assets/icons/chevron-left.png")}
          style={styles.icon}
          alt="prev"
        />
      </Pressable>
      <PaginationDot
        activeDotColor={"black"}
        maxPage={maxPage}
        curPage={page}
      />
      <Pressable
        onPress={() => {
          const nextPage = page + 1;
          if (nextPage < maxPage) {
            setPage(nextPage);
          }
        }}
      >
        <Image
          source={require("../../../assets/icons/chevron-right.png")}
          style={styles.icon}
          alt="next"
        />
      </Pressable>
    </View>
  );
}
