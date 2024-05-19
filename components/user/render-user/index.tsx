import { Header, Wrapper, Cell, Row } from "../../utils/verticalTable";
import DeleteBtn from "../../utils/delete-btn";
import EditLink from "../../utils/edit-link";
import handleDelete from "./handleDelete";
import { View } from "react-native";
import styles from "./styles";

export default function RenderUser({ item }) {
  return (
    <View>
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
          <Cell style={styles.actions}>
            <DeleteBtn onPress={() => handleDelete(item.id)} />
            <EditLink to="editUser" params={{ id: item.id }} />
          </Cell>
        </Wrapper>
      </Row>
    </View>
  );
}
