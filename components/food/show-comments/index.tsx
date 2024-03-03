import { SafeAreaView, FlatList, Text, Image, View } from "react-native";
import styles from "./styles";

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
              <Text style={styles.text}>{item.text}</Text>
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
