import useUserId from "../../../hooks/useUserId";
import DeleteBtn from "../../utils/delete-btn";
import { View, Image } from "react-native";
import CustomText from "../../utils/text";
import styles from "./styles";

export default function PostComment({ comments }) {
  const userId = useUserId();

  const handleDelete = (id) => {
    try {
      
    } catch (e) {}
  };

  return (
    <View style={styles.postComment}>
      {comments.map(({ id, message, user }: any) => {
        const fullName = user.firstname + " " + user.lastname;

        return (
          <View style={styles.item} key={id}>
            <CustomText style={styles.text}>{message}</CustomText>
            <View style={styles.group}>
              <Image
                source={{
                  uri: `https://p4rt.ir/public/images/users/${user?.photo}`,
                }}
                style={styles.image}
              />
              <CustomText>{fullName}</CustomText>
            </View>
          </View>
        );
      })}
    </View>
  );
}
