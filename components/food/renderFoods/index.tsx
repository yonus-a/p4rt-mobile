import { View, Image } from "react-native";
import CustomText from "../../utils/text";
import styles from "./styles";

export default function RenderFoods({ food }) {
  return (
    <View style={styles.renderFoods}>
      <CustomText>{food.name}</CustomText>
      <Image
        source={{
          uri: `https://p4rt.ir/public/images/foods/${food.image}`,
        }}
        style={styles.icon}
        alt={food.name}
        height={100}
        width={100}
      />
    </View>
  );
}
