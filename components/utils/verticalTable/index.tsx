import verticalTableStyle from "../../../styles/verticalTable";
import { View } from "react-native";
import CustomText from "../text";

export function Header({ children }) {
  return <CustomText style={verticalTableStyle.header}>{children}</CustomText>;
}

export function Cell({ children, style = {} }) {
  return (
    <CustomText style={[verticalTableStyle.cell, style]}>{children}</CustomText>
  );
}

export function Row({ children, style = {} }) {
  return <View style={[verticalTableStyle.row, style]}>{children}</View>;
}

export function Wrapper({ children }) {
  return <View style={verticalTableStyle.wrapper}>{children}</View>;
}

export function Table({ children }) {
  return <View style={verticalTableStyle.table}>{children}</View>;
}
