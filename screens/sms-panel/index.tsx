import BreadcrumbHeader from "../../components/overal/breadcrumb-header";
import SearchUsers from "../../components/utils/search-users";
import Container from "../../components/overal/container";
import { View } from "react-native";
import styles from "./styles";

export default function SmsPanel() {
  return (
    <View style={styles.smsPanel}>
      <BreadcrumbHeader />
      <Container>
        <SearchUsers />
      </Container>
    </View>
  );
}
