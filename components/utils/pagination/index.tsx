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
          setPage((p) => (p + 1 >= maxPage ? p : p + 1));
        }}
      >
        <Image
          source={require("../../../assets/icons/chevron-right.png")}
          style={styles.icon}
          alt="next"
        />
      </Pressable>
      <View style={{ transform: [{ rotate: "180deg" }] }}>
        <PaginationDot
          activeDotColor={"black"}
          maxPage={maxPage}
          curPage={page}
        />
      </View>
      <Pressable
        onPress={() => {
          setPage((p) => (p - 1 < 0 ? p : p - 1));
        }}
      >
        <Image
          source={require("../../../assets/icons/chevron-left.png")}
          style={styles.icon}
          alt="prev"
        />
      </Pressable>
    </View>
  );
}
