import { FlatList } from "react-native-gesture-handler";
import CustomTimeAgo from "../../utils/time-ago";
import CustomText from "../../utils/text";
import { View } from "react-native";
import styles from "./styles";

export default function RenderAbsentee({ data }) {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => {
        const fullName = item.user.firstname + " " + item.user.lastname;

        return (
          <View style={styles.item}>
            <CustomTimeAgo date={item.date} />
            <CustomText>{fullName}</CustomText>
          </View>
        );
      }}
    />
  );
}
