import PaginationDot from "react-native-animated-pagination-dot";
import { Pressable, View, Image } from "react-native";
import styles from "./styles";

export default function Pagination({
  style = {},
  setCurPage,
  curPage,
  maxPage,
}) {
  return (
    <View style={[styles.container, style]}>
      <Pressable onPress={() => setCurPage(curPage - 1)}>
        <Image
          source={require("../../../assets/icons/chevron-left.png")}
          style={styles.icon}
          width={50}
          height={50}
          alt="prev"
        />
      </Pressable>
      <PaginationDot
        activeDotColor={"black"}
        maxPage={maxPage}
        curPage={curPage}
      />
      <Pressable onPress={() => setCurPage(curPage + 1)}>
        <Image
          source={require("../../../assets/icons/chevron-right.png")}
          style={styles.icon}
          width={50}
          height={50}
          alt="next"
        />
      </Pressable>
    </View>
  );
}
