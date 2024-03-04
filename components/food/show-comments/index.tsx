import { SafeAreaView, FlatList, Image, View } from "react-native";
import CustomText from "../../utils/text";
import styles from "./styles";

export default function ShowComments({ data }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={[...data]}
        contentContainerStyle={{ gap: 10, paddingBottom: 10 }}
        style={styles.container}
        renderItem={({ item }) => {
          return (
            <View style={styles.item}>
              <CustomText style={styles.text}>{item.text}</CustomText>
              <Image
                source={{
                  uri: `https://p4rt.ir/public/images/users/${item.user?.photo}`,
                }}
                style={styles.image}
              />
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}
