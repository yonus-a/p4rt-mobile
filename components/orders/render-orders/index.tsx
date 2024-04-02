import { Row, Wrapper, Header, Cell } from "../../utils/verticalTable";
import { daysOfWeek } from "../../../utils/overal/daysOfWeek";
import verticalTable from "../../../styles/verticalTable";
import orderStatus from "../../../utils/food/orderStatus";
import CustomTimeAgo from "../../utils/time-ago";
import useUserId from "../../../hooks/useUserId";
import Pagination from "../../utils/pagination";
import CloseBtn from "../../utils/close-btn";
import handleConfirm from "./handleConfirm";
import DoneBtn from "../../utils/done-btn";
import handleReject from "./handleReject";
import { FlatList } from "react-native";

export default function RenderOrders({
  fetchNewData,
  setPage,
  data,
  page,
  take,
}) {
  const userId = useUserId();

  return (
    <FlatList
      data={[...data.orders, { pagination: true }]}
      contentContainerStyle={verticalTable.table}
      renderItem={({ item }) => {
        const fullName = item.user?.firstname + " " + item.user?.lastname;

        if (item.pagination) {
          return (
            <Pagination
              key={item.id}
              countItems={data.countOrders}
              style={{ marginTop: 10 }}
              setPage={setPage}
              take={take}
              page={page}
            />
          );
        }

        return (
          <Row key={item.id}>
            <Wrapper>
              <Header>غذا</Header>
              <Cell>{item.food?.name}</Cell>
            </Wrapper>
            <Wrapper>
              <Header>تعداد</Header>
              <Cell>{item.quantity}</Cell>
            </Wrapper>
            <Wrapper>
              <Header>کاربر</Header>
              <Cell>{fullName}</Cell>
            </Wrapper>
            <Wrapper>
              <Header>تاریخ ثبت</Header>
              <Cell>{<CustomTimeAgo date={item.orderdAt} />}</Cell>
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
              <Cell style={{ gap: 20 }}>
                {item.status !== 3 && (
                  <>
                    <DoneBtn
                      onPress={() =>
                        handleConfirm(item.id, userId, fetchNewData)
                      }
                    />
                    <CloseBtn
                      onPress={() =>
                        handleReject(item.id, userId, fetchNewData)
                      }
                    />
                  </>
                )}
              </Cell>
            </Wrapper>
          </Row>
        );
      }}
    />
  );
}
