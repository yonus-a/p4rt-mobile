import QuickPanel from "../../components/overal/quick-panel";
import ShowFoods from "../../components/food/food-card";
import DatePicker from "../../components/utils/datePicker";
import Container from "../../components/overal/container";
import Header from "../../components/overal/header";
import fetchDate from "../../fetch/fetchDate";
import { useEffect, useState } from "react";
import { addDays } from "date-fns-jalali";
import fetchData from "./fetchData";
import { ScrollView, View } from "react-native";
import styles from "./styles";
import FoodCard from "../../components/food/food-card";

export default function Foods({ navigation, route }) {
  const [data, setData] = useState([]);
  const [date, setDate] = useState(new Date());

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
    setSelectedDay(date);
  };

  return (
    <View style={styles.foods}>
      <Header />
      <Container>
        <DatePicker
          onChange={handleDateChange}
          defaultDate={selectedDay}
          style={styles.datePicker}
        />
        <ScrollView>
          {data.map((item) => (
            <FoodCard food={item} />
          ))}
        </ScrollView>
      </Container>
      <QuickPanel />
    </View>
  );
}
