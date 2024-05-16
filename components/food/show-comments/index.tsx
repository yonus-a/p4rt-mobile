import DeleteHiddenBtn from "../../utils/delete-hidden-btn";
import { FlatList, Image, View } from "react-native";
import errorAlert from "../../../utils/alert/error";
import useUserId from "../../../hooks/useUserId";
import CustomText from "../../utils/text";
import styles from "./styles";
import axios from "axios";

export default function ShowComments({ data }) {
  const userId = useUserId();

  const handleDelete = async (commentId) => {
    try {
      await axios.post("/food/deleteFoodComment", {
        commentId,
        userId,
      });
    } catch (e) {
      await errorAlert();
    }
  };

  return (
    <FlatList
      data={[...data]}
      contentContainerStyle={{ gap: 10, paddingBottom: 20 }}
      renderItem={({ item }) => {
        const fullName = item.user?.firstname + " " + item.user?.lastname;

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
            <CustomText style={styles.text}>{item.text.trim()}</CustomText>
          </View>
        );
      }}
    />
  );
}
