import { View, Text, Pressable, Modal } from "react-native";
import Container from "../../overal/container";
import CloseBtn from "../close-btn";
import { useState } from "react";
import styles from "./styles";

export default function MessageDialog({ item }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.msgDialog}>
      <Pressable style={styles.modalCta} onPress={() => setModalVisible(true)}>
        <Text>{item.title}</Text>
      </Pressable>
      <Modal visible={modalVisible}>
        <Container style={styles.content}>
          <CloseBtn onPress={() => setModalVisible(false)} />
          <Text style={styles.text}>{item.message}</Text>
        </Container>
      </Modal>
    </View>
  );
}
