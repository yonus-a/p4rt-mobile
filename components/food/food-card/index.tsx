import PrimaryButton from "../../utils/primary-button";
import useUserId from "../../../hooks/useUserId";
import { View, Image } from "react-native";
import FoodComment from "../food-comment";
import Counter from "../../utils/counter";
import CustomText from "../../utils/text";
import Shifts from "../../overal/shifts";
import FoodLike from "../food-like";
import { useState } from "react";
import styles from "./styles";

export default function FoodCard({ food }) {
  const [shift, setShift] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const userId = useUserId();

  const Defaultliked = !!food.food_like.find(
    (item: any) => item.userId === userId
  );

  return (
    <View style={styles.foodCard}>
      <View style={styles.info}>
        <Image
          style={styles.image}
          alt={food.name}
          source={{
            uri: `https://p4rt.ir/public/images/foods/${food.image}`,
          }}
        />
        <View style={styles.details}>
          <CustomText style={styles.foodName}>{food.name}</CustomText>
          <CustomText>{food.price} تومان</CustomText>
          <Shifts shift={shift} setShift={setShift} />
        </View>
      </View>
      <View style={styles.actions}>
        <FoodLike
          foodId={food.id}
          liked={Defaultliked}
          likes={food.food_like.length || 0}
        />
        <FoodComment comments={food.food_comment} foodId={food.id} />
        <Counter
          style={styles.counter}
          setCount={setQuantity}
          count={quantity}
        />
        <PrimaryButton title={"ثبت"} onPress={() => {}} style={styles.submit} />
      </View>
    </View>
  );
}
