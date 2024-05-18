import Navigate from "../../utils/navigate";
import CustomText from "../../utils/text";
import styles from "./styles";

export default function ReportCard({ amount, color, to, desc }) {
  return (
    <Navigate style={[styles.reportCard, { backgroundColor: color }]} to={to}>
      <CustomText style={[styles.amount]}>{amount}</CustomText>
      <CustomText style={styles.desc}>{desc}</CustomText>
    </Navigate>
  );
}
