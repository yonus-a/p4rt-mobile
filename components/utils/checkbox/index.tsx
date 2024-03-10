import { useController } from "react-hook-form";
import CheckBox from "expo-checkbox";
import { View } from "react-native";
import CustomText from "../text";
import styles from "./styles";

export default function CustomCheckBox({ control, name, label }) {
  const { field } = useController({
    control,
    name,
  });

  return (
    <View style={styles.wrapper}>
      <CustomText>{label}</CustomText>
      <CheckBox value={field.value} onValueChange={field.onChange} />
    </View>
  );
}
