import DeleteBtn from "../delete-btn";
import { View } from "react-native";
import Navigate from "../navigate";
import CustomText from "../text";
import styles from "./styles";

export default function MangmentHiddenItem({ item, onPress }) {
  return (
    <View style={styles.actions}>
      <DeleteBtn onPress={onPress} />
      <Navigate to="editFood" params={{ id: item.id }}>
        <CustomText>ویرایش</CustomText>
      </Navigate>
    </View>
  );
}
