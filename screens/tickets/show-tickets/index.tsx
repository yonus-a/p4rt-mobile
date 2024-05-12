import BreadcrumbHeader from "../../../components/overal/breadcrumb";
import RenderTickets from "../../../components/tickets/renderTickets.ts";
import TicketReport from "../../../components/tickets/report";
import Container from "../../../components/overal/container";
import { View } from "react-native";
import styles from "./styles";

export default function ShowTickets({ navigation }) {
  return (
    <View style={styles.showTickets}>
      <BreadcrumbHeader />
      <Container style={styles.container}>
        <TicketReport navigation={navigation} />
        <RenderTickets navigation={navigation} />
      </Container>
    </View>
  );
}
