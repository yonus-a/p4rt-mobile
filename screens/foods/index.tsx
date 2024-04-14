import ShowFoods from "../../components/food/show-foods";
import FoodHeader from "../../components/food/food-header";
import QuickPanel from "../../components/overal/quick-panel";
import { useEffect, useState } from "react";
import { addDays } from "date-fns-jalali";
import fetchData from "./fetchData";
import { View } from "react-native";
import styles from "./styles";

export default function Foods({ navigation, route }) {
  const [data, setData] = useState([]);

  // if 12pm is not passed show tommarow food else show three days later foods
  const tomarrowDay = addDays(new Date(), 1);
  const thereeDaysLater = addDays(new Date(), 2);
  const defualtDay =
    new Date().getHours() >= 12 ? thereeDaysLater : tomarrowDay;
  const [selectedDay, setSelectedDay] = useState(defualtDay);

  useEffect(() => {
    fetchData(setData, selectedDay);
  }, [selectedDay, route.params?.updater]);

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
