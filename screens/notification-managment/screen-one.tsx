import SearchUsers from "../../components/utils/search-users";
import Container from "../../components/overal/container";
import CustomText from "../../components/utils/text";
import PrimaryButton from "../../components/utils/primary-button";
import Checkbox from "expo-checkbox";
import { View } from "react-native";

export default function ScreenOne({
  setEveryone,
  carouselRef,
  setUsers,
  everyone,
  users,
}) {
  return (
    <Container>
      <SearchUsers setSelectedUser={setUsers} selectedUser={users} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          marginBottom: 20,
          gap: 20,
        }}
      >
        <CustomText>ارسال برای همه</CustomText>
        <Checkbox
          style={{ alignSelf: "flex-end" }}
          onValueChange={(val) => setEveryone(val)}
          value={everyone}
        />
      </View>
      PrimaryButton
        onPress={() => carouselRef.current.next()}
        style={{ marginTop: 10 }}
        title="ادامه"
      />
    </Container>
  );
}
