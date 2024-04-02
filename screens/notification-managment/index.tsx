import BreadcrumbHeader from "../../components/overal/breadcrumb-header";
import { View, useWindowDimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { useRef, useState } from "react";
import ScreenOne from "./screen-one";
import ScreenTow from "./screen-tow";
import styles from "./styles";
import useClear from "../../hooks/useClear";

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
      <BreadcrumbHeader />
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
    </View>
  );
}
