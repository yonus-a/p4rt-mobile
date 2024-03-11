import { Row, Header, Wrapper, Cell } from "../../utils/verticalTable";
import { View } from "react-native";
import styles from "./styles";
import DeleteBtn from "../../utils/delete-btn";

export default function RenderUser({ item }) {
  return (
    <Row style={styles.item}>
      <Wrapper>
        <Header>نام</Header>
        <Cell>{item.firstname + " " + item.lastname}</Cell>
      </Wrapper>
      <Wrapper>
        <Header>کد ملی</Header>
        <Cell>{item.id}</Cell>
      </Wrapper>
      <Wrapper>
        <Header>واحد</Header>
        <Cell>{item?.unit?.name}</Cell>
      </Wrapper>
      <Wrapper>
        <Header>جایگاه</Header>
        <Cell>{item.user_position?.name}</Cell>
      </Wrapper>
      <Wrapper>
        <Header>تحصیلات</Header>
        <Cell>{item?.education}</Cell>
      </Wrapper>
      <Wrapper>
        <Header>شماره تماس</Header>
        <Cell>{item?.education}</Cell>
      </Wrapper>
      <Wrapper>
        <Header>عملیات ها</Header>
        <Cell>
          <DeleteBtn onPress={() => {}} />
        </Cell>
      </Wrapper>
    </Row>
  );
}
