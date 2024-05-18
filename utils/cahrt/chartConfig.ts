import { CLR_WHITE } from "../../styles/globalStyles";

export const chartConfig = {
  backgroundColor: CLR_WHITE,
  backgroundGradientFrom: CLR_WHITE,
  backgroundGradientTo: CLR_WHITE,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  barPercentage: 0.5,
  decimalPlaces: 0,
  strokeWidth: 2,
};
