import BreadcrumbHeader from "../../components/overal/breadcrumb-header";
import Container from "../../components/overal/container";
import ShowPosts from "../../components/post/show-posts";
import { useEffect, useState } from "react";
import fetchData from "./fetchData";
import { View } from "react-native";

export default function Posts({ route }) {
  const { category } = route.params;
  const [data, setData] = useState({
    totalPost: 0,
    posts: [],
  });
  const [page, setPage] = useState(0);
  const take = 10;

  useEffect(() => {
    fetchData(setData, {
      page: page + 1,
      category: category,
      take,
    });

    return () => {
      setData({
        totalPost: 0,
        posts: [],
      });
    };
  }, [page, category]);

  return (
    <View style={{ flex: 1 }}>
      <BreadcrumbHeader />
      <Container>
        <ShowPosts data={data} take={take} setPage={setPage} page={page} />
      </Container>
    </View>
  );
}
