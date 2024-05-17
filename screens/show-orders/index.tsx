import SearchInputs from "../../components/utils/search-input";
import RenderOrders from "../../components/food/renderOrders";
import QuickPanel from "../../components/overal/quick-panel";
import Container from "../../components/overal/container";
import Header from "../../components/overal/header";
import { useEffect, useState } from "react";
import { View } from "react-native";
import fetchData from "./fetchData";
import styles from "./styles";

const initialData = {
  countOrders: 0,
  orders: [],
};

export default function ShowOrders() {
  const take = 10;
  const [fetchNewData, setFetchNewData] = useState({});
  const [data, setData] = useState(initialData);
  const [search, setSearch] = useState("");
  const [curPage, setPage] = useState(0);

  useEffect(() => {
    fetchData({
      page: curPage,
      setData,
      search,
      take,
    });
  }, [search, fetchNewData, curPage]);

  return (
    <View style={styles.cart}>
      <Header />
      <Container>
        <SearchInputs setSearch={setSearch} />
        {!!data.orders.length && (
          <RenderOrders
            fetchNewData={() => setFetchNewData({})}
            setPage={setPage}
            page={curPage}
            data={data}
            take={take}
          />
        )}
      </Container>
      <QuickPanel />
    </View>
  );
}
