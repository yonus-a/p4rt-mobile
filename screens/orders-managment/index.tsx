import BreadcrumbHeader from "../../components/overal/breadcrumb-header";
import FitlerOrders from "../../components/orders/filter-orders";
import RenderOrders from "../../components/orders/render-orders";
import Container from "../../components/overal/container";
import { useEffect, useState } from "react";
import { View } from "react-native";
import fetchData from "./fetchData";
import styles from "./styles";

const initialData = {
  orders: [],
  countOrders: 0,
};

export default function OrderManagment() {
  const take = 10;
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  const [fetchNew, setFetchNew] = useState({});
  const [date, setDate] = useState(new Date());
  const [data, setData] = useState<any>(initialData);

  useEffect(() => {
    fetchData({ setData, page, take, search, date });
  }, [search, date, page, fetchNew]);

  const fetchNewData = () => {
    setFetchNew({});
  };

  return (
    <View style={styles.ordersManagment}>
      <BreadcrumbHeader />
      <Container style={{ gap: 10 }}>
        <FitlerOrders
          setDate={setDate}
          setSearch={setSearch}
          date={date}
          fetchNewData={fetchNewData}
        />
        {!!data.orders.length && (
          <RenderOrders
            fetchNewData={fetchNewData}
            setPage={setPage}
            data={data}
            page={page}
            take={take}
          />
        )}
      </Container>
    </View>
  );
}
