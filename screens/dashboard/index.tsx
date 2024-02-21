import UserDashboard from "../../components/dashboard/user";
import Header from "../../components/overal/header/indexx";
import Container from "../../components/overal/container";
import { View } from "react-native";
import styles from "./styles";

export default function Dashborad({ navigation }: any) {
  return (
    <View style={styles.dashborad}>
      <Header navigation={navigation} />
      <Container>
        <UserDashboard />
      </Container>
    </View>
  );
}
