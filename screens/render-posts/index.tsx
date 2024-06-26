import Container from "../../components/overal/container";
import ShowPosts from "../../components/post/show-posts";
import Header from "../../components/overal/header";
import Menu from "../../components/overal/quick-panel";
import { useEffect, useState } from "react";
import fetchData from "./fetchData";
import { View } from "react-native";

const initialData = {
  totalPost: 0,
  posts: [],
};

export default function RenderPosts({ route }) {
  const { category } = route.params;
  const [data, setData] = useState(initialData);
  const [page, setPage] = useState(0);
  const take = 10;

  useEffect(() => {
    fetchData(setData, {
      page: page + 1,
      category,
      take,
    });
  }, [page, category]);

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Container>
        <ShowPosts data={data} take={take} setPage={setPage} page={page} />
      </Container>
      <Menu />
    </View>
  );
}
