import { View, Image, Modal, Pressable } from "react-native";
import Container from "../../overal/container";
import CloseBtn from "../../utils/close-btn";
import CustomText from "../../utils/text";
import styles from "./styles";
import { useState } from "react";

export default function RenderCriticsItem({ item }) {
  const [modalVisible, setModalVisible] = useState(false);
  const name = item.name;

  return (
    <View style={{ flex: 1 }}>
      <Pressable style={styles.item} onPress={() => setModalVisible(true)}>
        <CustomText>{name || "ناشناس"}</CustomText>
        {item.readed ? (
          <Image
            source={require("../../../assets/icons/readed.png")}
            width={50}
            height={50}
            style={styles.icon}
          />
        ) : (
          <Image
            source={require("../../../assets/icons/unread.png")}
            style={styles.icon}
            width={50}
            height={50}
          />
        )}
      </Pressable>
      <Modal visible={modalVisible}>
        <Container style={styles.content}>
          <CloseBtn onPress={() => setModalVisible(false)} />
          <CustomText>{item.msg}</CustomText>
        </Container>
      </Modal>
    </View>
  );
}