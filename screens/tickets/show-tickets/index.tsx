import RenderTickets from "../../../components/tickets/renderTickets.ts";
import TicketReport from "../../../components/tickets/report";
import Container from "../../../components/overal/container";
import Header from "../../../components/overal/header";
import { View } from "react-native";
import styles from "./styles";

export default function ShowTickets({ navigation }) {
  return (
    <View style={styles.showTickets}>
      <Header />
      <Container style={styles.container}>
        <TicketReport />
        <RenderTickets navigation={navigation} />
      </Container>
    </View>
  );
}
