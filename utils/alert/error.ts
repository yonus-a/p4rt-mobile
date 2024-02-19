import { DropdownAlertType } from "react-native-dropdownalert";
import { alert } from "../../App";

export default async function errorAlert() {
  await alert({
    type: DropdownAlertType.Error,
    message: "مشکلی پیش آمده لطفا مجدادا تلاش کنید",
    title: "خطلا",
  });
}
