import PressableIcon from "../../utils/pressable-icon";
import Container from "../../overal/container";
import ShowComments from "../show-comments";
import AddComment from "../add-comment";
import Modal from "react-native-modal";
import { useState } from "react";
import styles from "./styles";

export default function FoodComment({ comments, foodId }) {
  const [visible, setVisible] = useState(false);

  const handlePress = () => {
    setVisible(!visible);
  };

  return (
    <>
      <PressableIcon
        srouce={require("../../../assets/icons/chat.png")}
        iconStyle={styles.icon}
        onPress={handlePress}
        alt="comment"
      />
      <Modal
        isVisible={visible}
        style={styles.modal}
        onBackdropPress={handlePress}
      >
        <Container>
          <ShowComments data={comments} />
          <AddComment foodId={foodId} onSubmited={handlePress} />
        </Container>
      </Modal>
    </>
  );
}
