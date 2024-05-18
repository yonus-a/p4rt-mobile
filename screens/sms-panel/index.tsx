import { View, useWindowDimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import Header from "../../components/overal/header";
import { useRef, useState } from "react";
import ScreenOne from "./screen-one";
import ScreenTow from "./screen-tow";
import styles from "./styles";
import Menu from "../../components/overal/quick-panel";

export default function SmsPanel() {
  const { width } = useWindowDimensions();
  const [users, setUsers] = useState([]);
  const carouselRef = useRef();

  return (
    <View style={styles.smsPanel}>
      <Header />
      <Carousel
        loop={false}
        enabled={false}
        defaultIndex={0}
        data={[ScreenOne, ScreenTow]}
        renderItem={({ item: Component }: any) => (
          <Component
            carouselRef={carouselRef}
            setUsers={setUsers}
            users={users}
          />
        )}
        width={width}
        ref={carouselRef}
      />
      <Menu />
    </View>
  );
}
