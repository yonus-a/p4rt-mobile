import { statusCode } from "../../../utils/tickets/status";
import { View } from "react-native";
import styles from "./styles";
import CustomText from "../../utils/text";

const classes: any = {
  0: "redTicket",
  1: "yellowTicket",
  2: "greenTicket",
};

export default function ShowStatus({ status }) {
  return (
    <View>
      <CustomText style={[styles[classes[status]], styles.ticketStatus]}>
        {statusCode[status]}
      </CustomText>
    </View>
  );
}
