import DeleteHiddenBtn from "../../utils/delete-hidden-btn";
import useUserId from "../../../hooks/useUserId";
import { Image, View } from "react-native";
import CustomText from "../../utils/text";
import styles from "./styles";

export default function ShowComments({ comments, handleDelete }) {
  const userId = useUserId();

  return (
    <View style={styles.showComments}>
      {comments.map((item) => {
        const fullName = item.user?.firstname + " " + item.user?.lastname;
        if(!item.message) return null;

        return (
          <View style={styles.item} key={item.id}>
            <View style={styles.profile}>
              <Image
                source={{
                  uri: `https://p4rt.ir/public/images/users/${item.user?.photo}`,
                }}
                style={styles.image}
              />
              <CustomText style={styles.name}>{fullName}</CustomText>
              {item.user?.id === userId && (
                <DeleteHiddenBtn onPress={() => handleDelete(item.id)} />
              )}
            </View>
            <CustomText style={styles.text}>{item.message.trim()}</CustomText>
          </View>
        );
      })}
    </View>
  );
}
