import { Pressable, View } from "react-native";
import styles from "./styles";
import CustomText from "../../../components/utils/text";

export default function ChatLine({ message, attachment }) {
  return (
    <View style={styles.chatLine}>
      <CustomText style={styles.line}>
        {message}
        {attachment !== "" && (
          <Pressable style={styles.attachment}>
            <CustomText>فایل ضمیمه</CustomText>
          </Pressable>
        )}
      </CustomText>
    </View>
  );
}
