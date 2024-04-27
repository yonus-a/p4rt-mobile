import { addHours, addMinutes } from "date-fns-jalali";
import moment from "moment-timezone";

export default function fixTz(date: Date) {
  const offsetMinutes = date.getTimezoneOffset();

  const hours = Math.floor(offsetMinutes / 60);
  const minutes = Math.abs(offsetMinutes % 60);

  const UTC = addMinutes(addHours(date, hours), minutes);
  const tehran = addMinutes(addHours(UTC, 3), 30);

  //   add tehran timezone for server
  return moment(tehran).tz("Asia/Tehran").toDate();
}
