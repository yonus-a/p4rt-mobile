import PrimaryButtonIcon from "../button-icon";
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
        style={styles.modal}
        isVisible={visible}
      >
        <View style={styles.wrapper}>{children}</View>
      </Modal>
    </View>
  );
}
