import { Pressable } from "react-native";
import Modal from "react-native-modal";
import { View } from "react-native";
import moment from "jalali-moment";
import Calender from "../calender";
import { useState } from "react";
import CustomText from "../text";
import styles from "./styles";
import useClear from "../../../hooks/useClear";

export default function DatePicker({ onChange, style = {} }) {
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
    const nextDate = moment.from(date, "fa", "YYYY/MM/DD");
    onChange(nextDate);
    toggleModal();
    setDate(date);
  };

  return (
    <View style={[styles.datepicker, style]}>
      <Pressable onPress={toggleModal} style={styles.dateInput}>
        <CustomText style={{ textAlign: "right" }}>
          {date || "تاریخ"}
        </CustomText>
      </Pressable>
      <Modal isVisible={visible} onBackdropPress={toggleModal}>
        <Calender
          onChange={handleChange}
        />
      </Modal>
    </View>
  );
}
