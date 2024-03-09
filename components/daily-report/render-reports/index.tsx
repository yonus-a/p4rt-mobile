import { Cell, Header, Row, Wrapper } from "../../utils/verticalTable";
import verticalTable from "../../../styles/verticalTable";
import { FlatList } from "react-native-gesture-handler";
import Pagination from "../../utils/pagination";

export default function RenderReports({ data, curPage, setCurPage, maxPage }) {
  return (
    <FlatList
      data={[...data, { pagination: true }]}
      contentContainerStyle={verticalTable.table}
      renderItem={({ item }) => {
        return (
          <>
            {!item.pagination ? (
              <Row>
                <Wrapper>
                  <Header>واحد</Header>
                  <Cell>{item.group}</Cell>
                </Wrapper>
                <Wrapper>
                  <Header>نام</Header>
                  <Cell>{item.name}</Cell>
                </Wrapper>
                <Wrapper>
                  <Header>جایگاه</Header>
                  <Cell>{item.position}</Cell>
                </Wrapper>
                <Wrapper>
                  <Header>نوع</Header>
                  <Cell>{item.type}</Cell>
                </Wrapper>
                <Wrapper>
                  <Header>توضیحات</Header>
                  <Cell>{item.description}</Cell>
                </Wrapper>
              </Row>
            ) : (
              <Pagination
                setCurPage={setCurPage}
                curPage={curPage}
                maxPage={maxPage}
              />
            )}
          </>
        );
      }}
    />
  );
}
