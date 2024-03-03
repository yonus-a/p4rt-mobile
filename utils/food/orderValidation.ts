// done

import { isBefore, isToday, addDays } from "date-fns-jalali";

export default function orderValidation(order: any, date: any) {
  //cant oreder for tomarrow after 12 oclock
  if (date.getHours() >= 12) {
    const tomarowDate = addDays(date, 1).getDate();
    if (tomarowDate === order.selectedDay.getDate()) {
      return false;
    }
  }

  // // // cant oreder for today
  if (isToday(order.selectedDay)) {
    return false;
  }

  // // // cant oreder for passed
  if (isBefore(order.selectedDay, date)) {
    return false;
  }

  return true;
}
