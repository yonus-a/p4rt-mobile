import DeleteBtn from "../../utils/delete-btn";
import Navigate from "../../utils/navigate";
import { View, Image } from "react-native";
import handleDelete from "./handleDelete";
import CustomText from "../../utils/text";
import styles from "./styles";

export default function RenderFoods({ food }) {
  return (
    <View style={styles.renderFoods}>
      <View style={styles.actions}>
        <DeleteBtn onPress={() => handleDelete(food.id)} />
        <Navigate to="editFood" params={{ id: food.id }}>
          <CustomText>ویرایش</CustomText>
        </Navigate>
      </View>
      <View style={styles.content}>
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
    </View>
  );
}
