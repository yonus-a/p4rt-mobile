import { Pressable } from "react-native";
import Modal from "react-native-modal";
import { View } from "react-native";
import moment from "jalali-moment";
import Calender from "../calender";
import { useState } from "react";
import CustomText from "../text";
import styles from "./styles";

export default function DatePicker({ onChange, style = {} }) {
  const [visible, setVisible] = useState(false);

  const toggleModal = () => {
    setVisible(!visible);
  };

  const handleChange = (date) => {
    const nextDate = moment.from(date, "fa", "YYYY/MM/DD");
    onChange(nextDate);
    toggleModal();
  };

  return (
    <View style={[styles.datepicker, style]}>
      <Pressable onPress={toggleModal} style={styles.dateInput}>
        <CustomText>تاریخ</CustomText>
      </Pressable>
      <Modal isVisible={visible} onBackdropPress={toggleModal}>
        <Calender onChange={handleChange} />
      </Modal>
    </View>
  );
}
