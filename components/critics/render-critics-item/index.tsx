import { View, Image, Modal, Pressable } from "react-native";
import PrimaryButton from "../../utils/primary-button";
import handleAddAnswers from "./handleAddAnswers";
import Container from "../../overal/container";
import CloseBtn from "../../utils/close-btn";
import CustomText from "../../utils/text";
import { useForm } from "react-hook-form";
import Input from "../../utils/input";
import { useState } from "react";
import styles from "./styles";

export default function RenderCriticsItem({ item }) {
  const [modalVisible, setModalVisible] = useState(false);
  const { control, handleSubmit } = useForm();

  const onSubmit = ({ msg }) => {
    handleAddAnswers({
      receptor: item.userId,
      ciriticId: item.id,
      msg,
    });
  };

  if (item.user) {
    var name = item.user?.firstname + " " + item.user?.lastname;
  } else {
    var name = "بدون نام";
  }

  return (
    <View style={{ flex: 1 }}>
      <Pressable style={styles.item} onPress={() => setModalVisible(true)}>
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
        <CustomText>{name}</CustomText>
      </Pressable>
      <Modal visible={modalVisible}>
        <Container style={styles.content}>
          <View style={styles.wrapper}>
            <CloseBtn
              style={styles.closeBtn}
              onPress={() => setModalVisible(false)}
            />
            <CustomText>{item.msg}</CustomText>
          </View>
          {item.userId && (
            <View style={styles.wrapper}>
              <Input
                multiline
                numberOfLines={5}
                control={control}
                placeholder="جواب خود را وارد کنید..."
                name="msg"
              />
              <PrimaryButton onPress={handleSubmit(onSubmit)} title="ارسال" />
            </View>
          )}
        </Container>
      </Modal>
    </View>
  );
}
