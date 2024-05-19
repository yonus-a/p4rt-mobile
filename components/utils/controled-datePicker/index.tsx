import ControledCalender from "../controled-calender";
import useClear from "../../../hooks/useClear";
import { Pressable } from "react-native";
import Modal from "react-native-modal";
import { View } from "react-native";
import { useState } from "react";
import CustomText from "../text";
import styles from "./styles";

export default function ControledDatePicker({ control, name, style = {} }) {
  const [visible, setVisible] = useState(false);

  const toggleModal = () => {
    setVisible(!visible);
  };

  useClear(() => {
    setVisible(false);
  });

  return (
    <View style={style}>
      <Pressable onPress={toggleModal} style={styles.dateInput}>
        <CustomText style={styles.inputText}>تاریخ</CustomText>
      </Pressable>
      <Modal isVisible={visible} onBackdropPress={toggleModal}>
        <ControledCalender
          onChange={() => toggleModal()}
          control={control}
          name={name}
        />
      </Modal>
    </View>
  );
}
