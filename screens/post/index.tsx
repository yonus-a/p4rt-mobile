import { ScrollView } from "react-native-virtualized-view";
import RenderPost from "../../components/post/render-post";
import Container from "../../components/overal/container";
import Menu from "../../components/overal/quick-panel";
import Header from "../../components/overal/header";
import { useEffect, useState } from "react";
import fetchComments from "./fetchComment";
import fetchPost from "./fetchPost";
import { View } from "react-native";
import styles from "./styles";

export default function Post({ route }) {
  const [fetchNewComment, setFetchNewComment] = useState({});
  const [comments, setComments] = useState<any>([]);
  const [data, setData] = useState<any>({});
  const { id } = route.params;

  useEffect(() => {
    fetchPost(setData, { id });
  }, [id]);

  useEffect(() => {
    fetchComments(setComments, { id });
  }, [fetchNewComment, id]);

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView style={styles.post}>
        <Container style={styles.wrapper}>
          <RenderPost
            post={data.post}
            countAllLike={data.likes}
            countAllSeen={data.seens}
            comments={comments}
            fetchNewComment={() => setFetchNewComment({})}
          />
        </Container>
      </ScrollView>
      <Menu />
    </View>
  );
}
