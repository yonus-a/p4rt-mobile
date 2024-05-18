import { CLR_BACKDROP } from "../../../styles/globalStyles";
import PrimaryButtonIcon from "../button-icon";
import Container from "../../overal/container";
import Modal from "react-native-modal";
import { View } from "react-native";
import { useState } from "react";
import styles from "./styles";

export default function OptionModal({ children }) {
  const [visible, setVisible] = useState(false);

  const toggleModal = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <PrimaryButtonIcon
        source={require("../../../assets/icons/options.png")}
        onPress={toggleModal}
        alt="options"
        height={50}
        width={50}
      />
      <Modal
        onBackdropPress={toggleModal}
        backdropColor={CLR_BACKDROP}
        style={styles.modal}
        isVisible={visible}
      >
        <Container style={styles.wrapper}>{children}</Container>
      </Modal>
    </View>
  );
}
