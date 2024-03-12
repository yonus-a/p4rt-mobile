import { Image, View } from "react-native";
import CustomText from "../../utils/text";
import styles from "./styles";

export default function ReportCard({
  iamgeStyle = {},
  amountColor,
  amount,
  color,
  icon,
  desc,
}) {
  return (
    <View style={[styles.reportCard, { backgroundColor: color }]}>
      <View style={styles.wrapper}>
        <Image style={[[styles.image, iamgeStyle]]} source={icon} alt="" />
        <CustomText style={[styles.amount, { backgroundColor: amountColor }]}>
          {amount}
        </CustomText>
      </View>
      <CustomText style={styles.desc}>{desc}</CustomText>
    </View>
  );
}
