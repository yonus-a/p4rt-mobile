import { DropdownAlertType } from "react-native-dropdownalert";
import { alert } from "../../components/overal/alert";

interface Props {
  title?: string;
  msg: string;
}

export default async function successAlert({ msg, title = "" }: Props) {
  await alert({
    type: DropdownAlertType.Success,
    message: msg,
    title,
  });
}
