import useClear from "../../../hooks/useClear";
import { Pressable } from "react-native";
import { format } from "date-fns-jalali";
import Modal from "react-native-modal";
import { View } from "react-native";
import moment from "jalali-moment";
import Calender from "../calender";
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
    const nextDate = new Date(moment.from(date, "fa", "YYYY/MM/DD") as any);
    onChange(nextDate);
    toggleModal();
    setDate(date);
  };

  return (
    <View style={[styles.datepicker]}>
      <Pressable onPress={toggleModal} style={[styles.dateInput, style]}>
        <CustomText style={{ textAlign: "right" }}>
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
