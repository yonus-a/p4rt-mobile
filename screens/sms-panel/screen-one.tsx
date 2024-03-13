import PrimaryButton from "../../components/utils/primary-button";
import SearchUsers from "../../components/utils/search-users";
import Container from "../../components/overal/container";

export default function ScreenOne({ carouselRef, setUsers, users }) {
  return (
    <Container>
      <SearchUsers setSelectedUser={setUsers} selectedUser={users} />
      <PrimaryButton
        onPress={() => carouselRef.current.next()}
        style={{ marginTop: 10 }}
        title="ادامه"
      />
    </Container>
  );
}
