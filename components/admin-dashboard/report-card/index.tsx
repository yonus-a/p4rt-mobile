import { Image, View } from "react-native";
import CustomText from "../../utils/text";
import styles from "./styles";
import Navigate from "../../utils/navigate";

export default function ReportCard({
  iamgeStyle = {},
  amountColor,
  amount,
  color,
  icon,
  to,
  desc,
}) {
  return (
    <Navigate style={[styles.reportCard, { backgroundColor: color }]} to={to}>
      <View style={styles.wrapper}>
        <Image style={[[styles.image, iamgeStyle]]} source={icon} alt="" />
        <CustomText style={[styles.amount, { backgroundColor: amountColor }]}>
          {amount}
        </CustomText>
      </View>
      <CustomText style={styles.desc}>{desc}</CustomText>
    </Navigate>
  );
}
