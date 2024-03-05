import Container from "../../components/overal/container";
import ShowFoods from "../../components/food/show-foods";
import FoodHeader from "../../components/food/food-header";
import { addDays, getDay } from "date-fns-jalali";
import { useEffect, useState } from "react";
import { View } from "react-native";
import fetchData from "./fetchData";
import styles from "./styles";
import QuickPanel from "../../components/overal/quick-panel";

export default function Foods({ navigation }) {
  const [data, setData] = useState([]);

  // if 12pm is not passed show tommarow food else show three days later foods
  const tomarrowDay = getDay(addDays(new Date(), 1));
  const thereeDaysLater = getDay(addDays(new Date(), 2));
  const defualtDay =
    new Date().getHours() >= 12 ? thereeDaysLater : tomarrowDay;
  const [selectedDay, setSelectedDay] = useState(defualtDay);

  useEffect(() => {
    fetchData(setData, selectedDay);
  }, [selectedDay]);

  return (
    <View style={styles.foods}>
      <FoodHeader
        navigation={navigation}
        setSelectedDay={setSelectedDay}
        selectedDay={selectedDay}
      />
      <ShowFoods foods={data} navigation={navigation} />
      <QuickPanel />
    </View>
  );
}