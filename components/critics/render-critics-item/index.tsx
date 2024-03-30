import { View, Image, Modal, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setModalVisible } from "./criticsItemSlice";
import Container from "../../overal/container";
import CloseBtn from "../../utils/close-btn";
import CustomText from "../../utils/text";
import styles from "./styles";

export default function RenderCriticsItem({ item }) {
  const { modalVisible } = useSelector((state: any) => state.criticsItem);
  const dispatch = useDispatch();
  const name = item.name;

  return (
    <View style={{ flex: 1 }}>
      <Pressable
        style={styles.item}
        onPress={() => dispatch(setModalVisible(true))}
      >
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
          <CloseBtn onPress={() => dispatch(setModalVisible(false))} />
          <CustomText>{item.msg}</CustomText>
        </Container>
      </Modal>
    </View>
  );
}
