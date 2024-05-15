import useClear from "../../../hooks/useClear";
import { add, format } from "date-fns-jalali";
import { Pressable } from "react-native";
import Modal from "react-native-modal";
import { View } from "react-native";
import Calender from "../calender";
import moment from "jalali-moment";
import { useState } from "react";
import CustomText from "../text";
import styles from "./styles";

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
      <Pressable onPress={toggleModal} style={[styles.dateInput, style]}>
        <CustomText style={{ textAlign: "start" }}>
          {date || "تاریخ"}
        </CustomText>
      </Pressable>
      <Modal isVisible={visible} onBackdropPress={toggleModal}>
        <Calender
          onChange={handleChange}
          defaultDate={format(defaultDate, "yyyy/MM/dd")}
        />
      </Modal>
    </View>
  );
}
