import ControledCalender from "../controled-calender";
import { Pressable } from "react-native";
import Modal from "react-native-modal";
import { View } from "react-native";
import { useState } from "react";
import CustomText from "../text";
import styles from "./styles";
import { Shadow } from "react-native-shadow-2";
import useClear from "../../../hooks/useClear";

export default function ControledDatePicker({ control, name, style = {} }) {
  const [visible, setVisible] = useState(false);

  const toggleModal = () => {
    setVisible(!visible);
  };

  useClear(() => {
    setVisible(false);
  });

  return (
    <Shadow style={{ width: "100%", borderRadius: 10 }} distance={8}>
      <View style={[styles.datepicker, style]}>
        <Pressable onPress={toggleModal} style={styles.dateInput}>
          <CustomText>تاریخ</CustomText>
        </Pressable>
        <Modal isVisible={visible} onBackdropPress={toggleModal}>
          <ControledCalender
            onChange={() => toggleModal()}
            control={control}
            name={name}
          />
        </Modal>
      </View>
    </Shadow>
  );
}
