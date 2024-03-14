import { SwipeListView } from "react-native-swipe-list-view";
import errorAlert from "../../../utils/alert/error";
import useUserId from "../../../hooks/useUserId";
import DeleteBtn from "../../utils/delete-btn";
import { Shadow } from "react-native-shadow-2";
import deleteComment from "./deleteComment";
import { View, Image } from "react-native";
import CustomText from "../../utils/text";
import styles from "./styles";

export default function PostComment({ comments, fetchNewComment }) {
  const userId = useUserId();

  const handleDelete = async (id) => {
    try {
      await deleteComment(id);
      fetchNewComment();
    } catch (e) {
      await errorAlert();
    }
  };

  return (
    <View style={styles.postComment}>
      <SwipeListView
        data={comments}
        style={{ gap: 15 }}
        leftOpenValue={75}
        renderItem={({ item }) => {
          const { id, message, user }: any = item;
          const fullName = user.firstname + " " + user.lastname;

          return (
            <Shadow distance={5} key={id}>
              <View style={styles.item} key={id}>
                <CustomText style={styles.text}>{message}</CustomText>
                <View style={styles.group}>
                  <Image
                    source={{
                      uri: `https://p4rt.ir/public/images/users/${user?.photo}`,
                    }}
                    style={styles.image}
                  />
                  <CustomText style={styles.name} numberOfLines={1}>
                    {fullName}
                  </CustomText>
                </View>
              </View>
            </Shadow>
          );
        }}
        renderHiddenItem={({ item }: any) => {
          const canDelete = item.user?.id === userId;

          return (
            <View style={styles.hiddenItem}>
              {canDelete && <DeleteBtn onPress={() => handleDelete(item.id)} />}
            </View>
          );
        }}
      />
    </View>
  );
}
