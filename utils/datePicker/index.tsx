import CustomText from "../../components/utils/text";
import { Pressable } from "react-native";
import Modal from "react-native-modal";
import { View } from "react-native";
import Calender from "../calender";
import { useState } from "react";
import styles from "./styles";

export default function DatePicker({ onChange, style = {} }) {
  const [visible, setVisible] = useState(false);

  const toggleModal = () => {
    setVisible(!visible);
  };

  const handleChange = (date) => {
    toggleModal();
    onChange(date);
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
