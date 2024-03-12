import BreadcrumbHeader from "../../components/overal/breadcrumb-header";
import SearchInputs from "../../components/utils/search-input";
import RenderOrders from "../../components/food/renderOrders";
import QuickPanel from "../../components/overal/quick-panel";
import Container from "../../components/overal/container";
import { useEffect, useState } from "react";
import { View } from "react-native";
import fetchData from "./fetchData";
import styles from "./styles";

export default function ShowOrders() {
  const [fetchNewData, setFetchNewData] = useState({});
  const [data, setData] = useState({
    countOrders: 0,
    orders: [],
  });

  const take = 10;
  const [search, setSearch] = useState("");
  const [curPage, setPage] = useState(0);

  useEffect(() => {
    fetchData({
      page: curPage,
      setData,
      search,
      take,
    });

    return () => {
      setData({
        countOrders: 0,
        orders: [],
      });
    };
  }, [search, fetchNewData, curPage]);

  return (
    <View style={styles.cart}>
      <BreadcrumbHeader />
      <Container>
        <SearchInputs setSearch={setSearch} />
        <RenderOrders
          fetchNewData={() => setFetchNewData({})}
          setPage={setPage}
          page={curPage}
          data={data}
          take={take}
        />
      </Container>
      <QuickPanel />
    </View>
  );
}
