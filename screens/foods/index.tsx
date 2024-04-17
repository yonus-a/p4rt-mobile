import ShowFoods from "../../components/food/show-foods";
import FoodHeader from "../../components/food/food-header";
import QuickPanel from "../../components/overal/quick-panel";
import { useEffect, useState } from "react";
import { addDays } from "date-fns-jalali";
import useCart from "../../hooks/useCart";
import fetchData from "./fetchData";
import { View } from "react-native";
import styles from "./styles";

export default function Foods({ navigation, route }) {
  const [data, setData] = useState([]);
  const { emptyCart } = useCart();

  // if 12pm is not passed show tommarow food else show three days later foods
  const tomarrowDay = addDays(new Date(), 1);
  const thereeDaysLater = addDays(new Date(), 2);
  const defualtDay =
    new Date().getHours() >= 12 ? thereeDaysLater : tomarrowDay;
  const [selectedDay, setSelectedDay] = useState(defualtDay);

  useEffect(() => {
    fetchData(setData, selectedDay);
  }, [selectedDay, route.params?.updater]);

  const handleDateChange = (date) => {
    emptyCart();
    setSelectedDay(date);
  };

  return (
    <View style={styles.foods}>
      <FoodHeader
        navigation={navigation}
        setSelectedDay={handleDateChange}
        selectedDay={selectedDay}
      />
      <ShowFoods foods={data} navigation={navigation} />
      <QuickPanel />
    </View>
  );
}
