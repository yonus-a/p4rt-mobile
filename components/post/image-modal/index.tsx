import { Image, Pressable, useWindowDimensions, View } from "react-native";
import Modal from "react-native-modal";
import React, { useState } from "react";

export default function ImageModal({ imageSrc }) {
  const [visible, setVisible] = useState(false);
  const { width } = useWindowDimensions();

  return (
    <View>
      <Pressable onPress={() => setVisible(!visible)}>
        <Image
          source={{
            uri: `https://p4rt.ir/images/post-gallary/${imageSrc}`,
          }}
          style={{ width: 80, height: 50 }}
        />
      </Pressable>
      <Modal isVisible={visible} onBackdropPress={() => setVisible(false)}>
        <Image
          source={{
            uri: `https://p4rt.ir/images/post-gallary/${imageSrc}`,
          }}
          style={{ width: "100%", height: width / 2 }}
        />
      </Modal>
    </View>
  );
}
