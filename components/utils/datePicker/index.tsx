import { add, format, getDate, setDate } from "date-fns-jalali";
import { Pressable, Image } from "react-native";
import useClear from "../../../hooks/useClear";
import PressableIcon from "../pressable-icon";
import Modal from "react-native-modal";
import { View } from "react-native";
import Calender from "../calender";
import moment from "jalali-moment";
import { useState } from "react";
import CustomText from "../text";
import styles from "./styles";

export default function DatePicker({
  setSelectedDay = (date) => {},
  defaultDate = new Date(),
  containerStyle = {},
  style = {},
  onChange,
}) {
  const [visible, setVisible] = useState(false);
  const [date, setTDate] = useState(null);

  const toggleModal = () => {
    setVisible(!visible);
  };

  useClear(() => {
    setVisible(false);
    setTDate(null);
  });

  const handleChange = (date) => {
    const nextDate = moment.from(date, "fa", "YYYY/MM/DD").toDate();
    const addHoursToDate = add(nextDate, {
      hours: defaultDate.getHours(),
      minutes: defaultDate.getMinutes(),
    });

    onChange(addHoursToDate);
    toggleModal();
    setTDate(date);
  };

  const handlePrevDay = () => {
    setSelectedDay(setDate(defaultDate, getDate(defaultDate) - 1));
  };

  const handleNextDay = () => {
    setSelectedDay(setDate(defaultDate, getDate(defaultDate) + 1));
  };

  return (
    <View style={containerStyle}>
      <View style={styles.flexWrapper}>
        <PressableIcon
          iconStyle={styles.icon}
          srouce={require("../../../assets/icons/chevron-right.png")}
          onPress={handleNextDay}
          alt={"prev day"}
        />
        <Pressable onPress={toggleModal} style={[styles.dateInput, style]}>
          <Image
            source={require("../../../assets/icons/calendar.png")}
            alt=""
            style={styles.calendar}
          />
          <CustomText style={{ textAlign: "center" }}>
            {date || format(defaultDate, "yyyy/MM/dd")}
          </CustomText>
        </Pressable>
        <PressableIcon
          iconStyle={styles.icon}
          srouce={require("../../../assets/icons/chevron-left.png")}
          onPress={handlePrevDay}
          alt={"next day"}
        />
      </View>
      <Modal isVisible={visible} onBackdropPress={toggleModal}>
        <Calender
          onChange={handleChange}
          defaultDate={format(defaultDate, "yyyy/MM/dd")}
        />
      </Modal>
    </View>
  );
}
