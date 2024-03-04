import { SafeAreaView, FlatList, Image, View } from "react-native";
import styles from "./styles";
import CustomText from "../../utils/text";

export default function ShowComments({ data }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={data}
        style={styles.container}
        contentContainerStyle={{ gap: 10 }}
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
