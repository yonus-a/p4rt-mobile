import DropdownAlert, { DropdownAlertData } from "react-native-dropdownalert";

export let alert = (_data: DropdownAlertData) =>
  new Promise<DropdownAlertData>((res) => res);

export default function Alert() {
  return <DropdownAlert alert={(func) => (alert = func)} />;
}
