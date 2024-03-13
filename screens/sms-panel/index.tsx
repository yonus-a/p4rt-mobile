import BreadcrumbHeader from "../../components/overal/breadcrumb-header";
import { View, useWindowDimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { useRef, useState } from "react";
import ScreenOne from "./screen-one";
import ScreenTow from "./screen-tow";
import styles from "./styles";

export default function SmsPanel() {
  const { width } = useWindowDimensions();
  const [users, setUsers] = useState([]);
  const carouselRef = useRef();

  return (
    <View style={styles.smsPanel}>
      <BreadcrumbHeader />
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
    </View>
  );
}
