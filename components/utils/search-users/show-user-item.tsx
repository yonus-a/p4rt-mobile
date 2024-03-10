import { Pressable } from "react-native";
import CustomText from "../text";
import styles from "./styles";

export default function ShowUserItem({ item, onPress }) {
  const fullName = item.firstname + " " + item.lastname;

  return (
    <Pressable onPress={onPress} style={styles.item}>
      <CustomText>{item.id}</CustomText>
      <CustomText>{fullName}</CustomText>
    </Pressable>
  );
}
