import { SwipeListView } from "react-native-swipe-list-view";
import DeleteHiddenBtn from "../../utils/delete-hidden-btn";
import errorAlert from "../../../utils/alert/error";
import useUserId from "../../../hooks/useUserId";
import { Image, View } from "react-native";
import CustomText from "../../utils/text";
import styles from "./styles";
import axios from "axios";

export default function ShowComments({ data, fetchNewData }) {
  const userId = useUserId();

  const handleDelete = async (commentId) => {
    try {
      await axios.post("/food/deleteFoodComment", {
        commentId,
        userId,
      });
      fetchNewData();
    } catch (e) {
      await errorAlert();
    }
  };

  return (
    <SwipeListView
      data={[...data]}
      contentContainerStyle={{ gap: 10, paddingBottom: 250 }}
      style={styles.container}
      leftOpenValue={75}
      renderItem={({ item }) => {
        return (
          <View style={styles.item} key={item.id}>
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
      renderHiddenItem={({ item }) => {
        if (item.user?.id !== userId) return null;
        return <DeleteHiddenBtn onPress={() => handleDelete(item.id)} />;
      }}
    />
  );
}
