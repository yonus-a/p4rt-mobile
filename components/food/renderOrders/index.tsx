import { Cell, Header, Row, Wrapper } from "../../utils/verticalTable";
import { daysOfWeek } from "../../../utils/overal/daysOfWeek";
import orderStatus from "../../../utils/food/orderStatus";
import verticalTable from "../../../styles/verticalTable";
import errorAlert from "../../../utils/alert/error";
import Pagination from "../../utils/pagination";
import { FlatList, View } from "react-native";
import CloseBtn from "../../utils/close-btn";
import rejectOrder from "./rejectOrder";
import styles from "./styles";

export default function RenderOrders({
  fetchNewData,
  maxPage,
  setPage,
  orders,
  page,
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
      data={[...orders, { pagination: true }]}
      style={styles.renderOrders}
      contentContainerStyle={[verticalTable.table, { paddingBottom: 100 }]}
      renderItem={({ item, index }) => (
        <>
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
                  <Cell>{item.orderdAt}</Cell>
                </Wrapper>
                <Wrapper>
                  <Header>تاریخ دریافت</Header>
                  <Cell>{daysOfWeek[new Date(item.orderdFor).getDay()]}</Cell>
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
              setCurPage={setPage}
              maxPage={maxPage}
              curPage={page}
            />
          )}
        </>
      )}
    />
  );
}
