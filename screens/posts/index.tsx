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
  const [curPage, setCurPage] = useState(0);
  const take = 10;

  console.log(category);

  useEffect(() => {
    fetchData(setData, {
      page: curPage + 1,
      category: category,
      take,
    });

    return () => {
      setData({
        totalPost: 0,
        posts: [],
      });
    };
  }, [curPage, category]);

  return (
    <View style={{ flex: 1 }}>
      <BreadcrumbHeader />
      <Container>
        <ShowPosts
          posts={data.posts}
          maxPage={Math.round(data.totalPost / take)}
          setCurPage={setCurPage}
          curPage={curPage}
        />
      </Container>
    </View>
  );
}
