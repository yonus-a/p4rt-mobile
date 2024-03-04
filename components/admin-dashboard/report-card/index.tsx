import { Image, View } from "react-native";
import styles from "./styles";
import CustomText from "../../utils/text";

interface Props {
  amountColor: string;
  amount: number;
  color: string;
  desc: string;
  icon: any;
}

export default function ReportCard({
  amountColor,
  amount,
  color,
  icon,
  desc,
}: Props) {
  return (
    <View style={[styles.reportCard, { backgroundColor: color }]}>
      <View style={styles.wrapper}>
        <Image
          style={styles.image}
          source={icon}
          width={36}
          height={36}
          alt=""
        />
        <CustomText style={[styles.amount, { backgroundColor: amountColor }]}>
          {amount}
        </CustomText>
      </View>
      <CustomText style={styles.desc}>{desc}</CustomText>
    </View>
  );
}
