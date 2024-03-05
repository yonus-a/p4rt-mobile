import BreadcrumbHeader from "../../components/overal/breadcrumb-header";
import SearchInputs from "../../components/utils/search-input";
import RenderOrders from "../../components/food/renderOrders";
import Container from "../../components/overal/container";
import { useEffect, useState } from "react";
import { View } from "react-native";
import fetchData from "./fetchData";
import styles from "./styles";
import QuickPanel from "../../components/overal/quick-panel";

export default function ShowOrders({ navigation }) {
  const [reset, setReset] = useState({});
  const [data, setData] = useState({
    countOrders: 0,
    orders: [],
  });

  const [search, setSearch] = useState("");
  const [curPage, setPage] = useState(0);

  useEffect(() => {
    fetchData({
      page: curPage,
      take: 10,
      setData,
      search,
    });
  }, [search]);

  return (
    <View style={styles.cart}>
      <BreadcrumbHeader navigation={navigation} />
      <Container>
        <SearchInputs setSearch={setSearch} />
        <RenderOrders orders={data.orders} setReset={setReset} />
      </Container>
      <QuickPanel />
    </View>
  );
}
