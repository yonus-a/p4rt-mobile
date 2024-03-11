import BreadcrumbHeader from "../../components/overal/breadcrumb-header";
import FitlerOrders from "../../components/orders/filter-orders";
import RenderOrders from "../../components/orders/render-orders";
import Pagination from "../../components/utils/pagination";
import Container from "../../components/overal/container";
import { useEffect, useState } from "react";
import { View } from "react-native";
import fetchData from "./fetchData";
import styles from "./styles";

export default function OrderManagment() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<any>({
    orders: [],
    countOrders: 0,
  });
  const [date, setDate] = useState(new Date());
  const [page, setPage] = useState(0);
  const take = 10;

  useEffect(() => {
    fetchData({ setData, page, take, search, date });
  }, [search, date, page]);

  return (
    <View style={styles.ordersManagment}>
      <BreadcrumbHeader />
      <Container style={{ gap: 10 }}>
        <FitlerOrders setDate={setDate} />
        <RenderOrders
          orders={data.orders}
          maxPage={Math.floor(data.countOrders / take)}
          setCurPage={setPage}
          curPage={page}
        />
      </Container>
    </View>
  );
}
