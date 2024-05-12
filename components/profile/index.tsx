import { Pressable, Image, View } from "react-native";
import * as SecureStore from "expo-secure-store";
import styles from "./styles";

export default function Profile() {
  const profile = SecureStore.getItem("profile");

  return (
    <View style={styles.profile}>
      <Pressable onPress={() => {}}>
        <Image
          source={{
            uri: `https://p4rt.ir/public/images/users/${profile}`,
          }}
          resizeMode="cover"
          style={styles.image}
        />
      </Pressable>
    </View>
  );
}
