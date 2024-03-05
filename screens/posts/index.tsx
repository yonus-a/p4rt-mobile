import BreadcrumbHeader from "../../components/overal/breadcrumb-header";
import Pagination from "../../components/utils/pagination";
import Container from "../../components/overal/container";
import ShowPosts from "../../components/post/show-posts";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import fetchData from "./fetchData";

export default function Posts({ route }) {
  const { category } = route.params;
  const [data, setData] = useState({
    totalPost: 0,
    posts: [],
  });
  const [curPage, setCurPage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(category);
  const take = 10;

  useEffect(() => {
    fetchData(setData, {
      page: curPage + 1,
      category: selectedCategory,
      take,
    });
  }, [curPage]);

  return (
    <ScrollView style={{ flex: 1 }}>
      <BreadcrumbHeader />
      <Container>
        <ShowPosts posts={data.posts} />
        <Pagination
          maxPage={Math.round(data.totalPost / take)}
          setCurPage={setCurPage}
          curPage={curPage}
        />
      </Container>
    </ScrollView>
  );
}
