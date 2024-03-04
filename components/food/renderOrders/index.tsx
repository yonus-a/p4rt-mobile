import { Cell, Header, Row, Wrapper } from "../../utils/verticalTable";
import { daysOfWeek } from "../../../utils/overal/daysOfWeek";
import orderStatus from "../../../utils/food/orderStatus";
import verticalTable from "../../../styles/verticalTable";
import errorAlert from "../../../utils/alert/error";
import CloseBtn from "../../utils/close-btn";
import { FlatList } from "react-native";
import rejectOrder from "./rejectOrder";
import styles from "./styles";

export default function RenderOrders({ orders, setReset }) {
  const handleReject = async (id) => {
    try {
      await rejectOrder(id);
      setReset({});
    } catch (e) {
      await errorAlert();
    }
  };

  return (
    <FlatList
      data={orders}
      style={styles.renderOrders}
      contentContainerStyle={verticalTable.table}
      renderItem={({ item, index }) => (
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
              <CloseBtn onPress={handleReject} />
            </Cell>
          </Wrapper>
        </Row>
      )}
    />
  );
}
