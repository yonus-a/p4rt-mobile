import SearchUsers from "../../components/utils/search-users";
import Container from "../../components/overal/container";
import Button from "../../components/utils/button";

export default function ScreenOne({ carouselRef, setUsers, users }) {
  return (
    <Container>
      <SearchUsers setSelectedUser={setUsers} selectedUser={users} />
      <Button
        onPress={() => carouselRef.current.next()}
        style={{ marginTop: 10 }}
        title="ادامه"
      />
    </Container>
  );
}
