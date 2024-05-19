import Container from "../overal/container";
import { ScrollView } from "react-native";
import { Image } from "react-native";
import TopPosts from "./top-posts";
import Slider from "./slider";
import styles from "./styles";
import Ticker from "./ticker";

export default function UserDashboard() {
  return (
    <ScrollView>
      <Container style={styles.header}>
        <Slider />
        <TopPosts />
        <Ticker />
        <Image
          style={styles.najva}
          source={{
            uri: "https://p4rt.ir/public/images/najva-app.png",
          }}
        />
      </Container>
    </ScrollView>
  );
}
