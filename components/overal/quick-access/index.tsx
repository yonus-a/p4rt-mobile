import { Image, Pressable, View } from "react-native";
import styles from "./styles";

export default function QuickAccess() {
  return (
    <View style={styles.quickAccess}>
      <Pressable>
        <Image
          source={require("../../../assets/images/overal/logo.png")}
          style={styles.logo}
        />
      </Pressable>
    </View>
  );
}
