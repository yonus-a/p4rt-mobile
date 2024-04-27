import QuickPanel from "../../components/overal/quick-panel";
import FoodHeader from "../../components/food/food-header";
import ShowFoods from "../../components/food/show-foods";
import fetchDate from "../../fetch/fetchDate";
import { useEffect, useState } from "react";
import { addDays } from "date-fns-jalali";
import useCart from "../../hooks/useCart";
import fetchData from "./fetchData";
import { View } from "react-native";
import styles from "./styles";

export default function Foods({ navigation, route }) {
  const [data, setData] = useState([]);
  const [date, setDate] = useState(new Date());
  const { emptyCart } = useCart();

  // if 12pm is not passed show tommarow food else show three days later foods
  const tomarrowDay = addDays(date, 1);
  const thereeDaysLater = addDays(date, 2);
  const defualtDay = date.getHours() >= 12 ? thereeDaysLater : tomarrowDay;
  const [selectedDay, setSelectedDay] = useState(defualtDay);

  useEffect(() => {
    fetchDate(setDate);
    fetchData(setData, selectedDay);
  }, [selectedDay, route.params?.updater]);

  const handleDateChange = (date) => {
    emptyCart();
    setSelectedDay(date);
  };

  return (
    <View style={styles.foods}>
      <FoodHeader
        setSelectedDay={handleDateChange}
        selectedDay={selectedDay}
        navigation={navigation}
      />
      <ShowFoods foods={data} navigation={navigation} />
      <QuickPanel />
    </View>
  );
}
