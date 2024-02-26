import { Image, View, Text } from "react-native";
import styles from "./styles";

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
        <Text style={[styles.amount, { backgroundColor: amountColor }]}>
          {amount}
        </Text>
      </View>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  );
}
