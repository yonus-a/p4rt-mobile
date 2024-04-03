import { View, Pressable, Modal } from "react-native";
import Container from "../../overal/container";
import CloseBtn from "../close-btn";
import { useState } from "react";
import styles from "./styles";
import CustomText from "../text";
import useClear from "../../../hooks/useClear";

export default function MessageDialog({ item }) {
  const [modalVisible, setModalVisible] = useState(false);

  useClear(() => {
    setModalVisible(false);
  });

  return (
    <View style={styles.msgDialog}>
      <Pressable style={styles.modalCta} onPress={() => setModalVisible(true)}>
        <CustomText>{item.title}</CustomText>
      </Pressable>
      <Modal visible={modalVisible}>
        <Container style={styles.content}>
          <CloseBtn onPress={() => setModalVisible(false)} />
          <CustomText>{item.message}</CustomText>
        </Container>
      </Modal>
    </View>
  );
}
