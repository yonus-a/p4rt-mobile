import { chartConfig } from "../../../utils/cahrt/chartConfig";
import { useWindowDimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import styles from "./styles";

interface Props {
  data: any;
  label: string;
}

export default function Chart({ data, label = "" }: Props) {
  const { width } = useWindowDimensions();

  if (!data.length) return null;

  const chartOptions = {
    labels: ["7", "6", "5", "4", "3", "2", "1"],
    datasets: [
      {
        data,
        color: (opacity = 1) => `rgba(32, 50, 112, ${opacity})`,
      },
    ],
    legend: [label],
  };

  return (
    <LineChart
      height={width / 2}
      data={chartOptions}
      width={width - 48}
      style={styles.chart}
      chartConfig={chartConfig}
      bezier
    />
  );
}
