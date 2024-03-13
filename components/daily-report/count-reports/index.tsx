import CustomText from "../../utils/text";
import { View } from "react-native";
import styles from "./styles";

interface Props {
  data: any;
}

export default function CountReports({ data }: Props) {
  return (
    <View style={styles.countReports}>
      <CustomText style={styles.text}>تعداد off ها: {data.countOff}</CustomText>
      <CustomText style={styles.text}>تعداد مرخصی ها: {data.countLeave}</CustomText>
      <CustomText style={styles.text}>تعداد تعلیق ها: {data.countSuspension}</CustomText>
    </View>
  );
}
