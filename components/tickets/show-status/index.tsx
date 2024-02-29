import { statusCode } from "../../../utils/tickets/status";
import { View, Text } from "react-native";
import styles from "./styles";

const classes: any = {
  0: "redTicket",
  1: "yellowTicket",
  2: "greenTicket",
};

export default function ShowStatus({ status }) {
  return (
    <View>
      <Text style={[styles[classes[status]], styles.ticketStatus]}>
        {statusCode[status]}
      </Text>
    </View>
  );
}
