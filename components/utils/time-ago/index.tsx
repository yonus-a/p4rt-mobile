import fa from "javascript-time-ago/locale/fa";
import TimeAgo from "javascript-time-ago";
import CustomText from "../text";

TimeAgo.addDefaultLocale(fa);

export default function CustomTimeAgo({ date }) {
  const timeAgo = new TimeAgo("fa-IR");
  return <CustomText>{timeAgo.format(new Date(date))}</CustomText>;
}
