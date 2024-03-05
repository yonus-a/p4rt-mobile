import BreadcrumbHeader from "../../components/overal/breadcrumb-header";
import Container from "../../components/overal/container";
import RenderPost from "../../components/post/render-post";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import fetchData from "./fetchData";
import styles from "./styles";

export default function Post({ route }) {
  const [comments, setComments] = useState<any>([]);
  const [data, setData] = useState<any>({});
  const { id } = route.params;

  useEffect(() => {
    fetchData(setData, setComments, { id });
  }, []);

  return (
    <ScrollView style={styles.post}>
      <BreadcrumbHeader />
      <Container
        style={{
          backgroundColor: "white",
        }}
      >
        <RenderPost
          post={data.post}
          countAllLike={data.likes}
          countAllSeen={data.seens}
          comments={comments}
        />
      </Container>
    </ScrollView>
  );
}
