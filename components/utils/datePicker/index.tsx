import { Pressable, Image } from "react-native";
import useClear from "../../../hooks/useClear";
import { add, format } from "date-fns-jalali";
import Modal from "react-native-modal";
import { View } from "react-native";
import Calender from "../calender";
import moment from "jalali-moment";
import { useState } from "react";
import CustomText from "../text";
import styles from "./styles";
import PressableIcon from "../pressable-icon";

export default function DatePicker({
  defaultDate = new Date(),
  style = {},
  onChange,
}) {
  const [visible, setVisible] = useState(false);
  const [date, setDate] = useState(null);

  const toggleModal = () => {
    setVisible(!visible);
  };

  useClear(() => {
    setVisible(false);
    setDate(null);
  });

  const handleChange = (date) => {
    const nextDate = moment.from(date, "fa", "YYYY/MM/DD").toDate();
    const addHoursToDate = add(nextDate, {
      hours: defaultDate.getHours(),
      minutes: defaultDate.getMinutes(),
    });

    onChange(addHoursToDate);
    toggleModal();
    setDate(date);
  };

  return (
    <View>
      <View style={styles.flexWrapper}>
        <PressableIcon iconStyle={styles.icon} srouce={require("../../../assets/icons/chevron-right.png")} onPress={() => {}} alt={""}  />
      <Pressable onPress={toggleModal} style={[styles.dateInput, style]}>
        <Image source={require("../../../assets/icons/calendar.png")} alt="" style={styles.calendar} />
        <CustomText style={{ textAlign: "center"}}>
          {date || "تاریخ"}
        </CustomText>
      </Pressable>
        <PressableIcon iconStyle={styles.icon} srouce={require("../../../assets/icons/chevron-left.png")} onPress={() => {}} alt={""}  />
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
