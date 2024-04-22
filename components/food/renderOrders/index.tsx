import { Cell, Header, Row, Wrapper } from "../../utils/verticalTable";
import orderStatus from "../../../utils/food/orderStatus";
import verticalTable from "../../../styles/verticalTable";
import errorAlert from "../../../utils/alert/error";
import Pagination from "../../utils/pagination";
import { FlatList, View } from "react-native";
import CloseBtn from "../../utils/close-btn";
import { format } from "date-fns-jalali";
import rejectOrder from "./rejectOrder";
import styles from "./styles";
import React from "react";

export default function RenderOrders({
  fetchNewData,
  setPage,
  data,
  page,
  take,
}) {
  const handleReject = async (id) => {
    try {
      await rejectOrder(id);
      fetchNewData();
    } catch (e) {
      await errorAlert();
    }
  };

  return (
    <FlatList
      style={styles.renderOrders}
      data={[...data.orders, { pagination: true }]}
      contentContainerStyle={[verticalTable.table, { paddingBottom: 100 }]}
      renderItem={({ item, index }) => (
        <React.Fragment key={item.id}>
          {!item.pagination ? (
            <View style={{ flex: 1, padding: 5 }}>
              <Row style={index % 2 !== 0 && verticalTable.odd}>
                <Wrapper>
                  <Header>نام غذا</Header>
                  <Cell>{item.food?.name}</Cell>
                </Wrapper>
                <Wrapper>
                  <Header>تعداد</Header>
                  <Cell>{item.quantity}</Cell>
                </Wrapper>
                <Wrapper>
                  <Header>تاریخ ثبت</Header>
                  <Cell>{format(item.orderdAt, "yyyy/MM/dd")}</Cell>
                </Wrapper>
                <Wrapper>
                  <Header>تاریخ دریافت</Header>
                  <Cell>{format(item.orderdFor, "yyyy/MM/dd")}</Cell>
                </Wrapper>
                <Wrapper>
                  <Header>مبلغ کل</Header>
                  <Cell>{item.total_price}</Cell>
                </Wrapper>
                <Wrapper>
                  <Header>وضعیت</Header>
                  <Cell>{orderStatus[item.status]}</Cell>
                </Wrapper>
                <Wrapper>
                  <Header>عملیات ها</Header>
                  <Cell>
                    <CloseBtn onPress={() => handleReject(item.id)} />
                  </Cell>
                </Wrapper>
              </Row>
            </View>
          ) : (
            <Pagination
              style={{ marginTop: 30 }}
              countItems={data.countOrders}
              setPage={setPage}
              page={page}
              take={take}
            />
          )}
        </React.Fragment>
      )}
    />
  );
}
