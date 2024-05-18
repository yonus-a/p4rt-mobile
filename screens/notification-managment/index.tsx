import { View, useWindowDimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import Menu from "../../components/overal/quick-panel";
import Header from "../../components/overal/header";
import useClear from "../../hooks/useClear";
import { useRef, useState } from "react";
import ScreenTow from "./screen-tow";
import ScreenOne from "./screen-one";
import styles from "./styles";

export default function NotificationManagment() {
  const [everyone, setEveryone] = useState(false);
  const { width } = useWindowDimensions();
  const [users, setUsers] = useState([]);
  const carouselRef = useRef();

  useClear(() => {
    setEveryone(false);
    setUsers([]);
  });

  return (
    <View style={styles.smsPanel}>
      <Header />
      <Carousel
        loop={false}
        enabled={false}
        data={[ScreenOne, ScreenTow]}
        renderItem={({ item: Component }: any) => (
          <Component
            carouselRef={carouselRef}
            setEveryone={setEveryone}
            everyone={everyone}
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
