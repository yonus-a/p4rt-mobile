import { Pressable } from "react-native";

export default function ShowUserItem({ item, addUser }) {
  const fullName = item.firstname + " " + item.lastname;
  return <Pressable onPress={addUser}>{fullName}</Pressable>;
}
