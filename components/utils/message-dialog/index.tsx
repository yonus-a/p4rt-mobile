import { View, Pressable, Modal } from "react-native";
import Container from "../../overal/container";
import useClear from "../../../hooks/useClear";
import CloseBtn from "../close-btn";
import { useState } from "react";
import CustomText from "../text";
import styles from "./styles";

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
