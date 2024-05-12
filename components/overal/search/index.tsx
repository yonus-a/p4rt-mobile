import { Pressable, View, Image } from "react-native";
import styles from "./styles";

export default function Search() {
  return (
    <View style={styles.search}>
      <Pressable>
        <Image
          source={require("../../../assets/icons/search.png")}
          style={styles.icon}
          alt=""
        />
      </Pressable>
    </View>
  );
}
