import Container from "../overal/container";
import { Image } from "react-native";
import TopPosts from "./top-posts";
import Slider from "./slider";
import styles from "./styles";
import TVSubtitle from "./tv";

export default function UserDashboard() {
  return (
    <Container>
      <Slider />
      <TopPosts />
      <TVSubtitle
        text={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis optio sapiente quia incidunt veritatis, vel numquam maiores autem. Distinctio, eveniet dolor! Ipsum iste ratione expedita voluptates sed esse impedit molestias."
        }
      />
      <Image
        style={styles.najva}
        source={require("../../assets/images/overal/najva.png")}
      />
    </Container>
  );
}
