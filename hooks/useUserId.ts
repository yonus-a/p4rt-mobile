import * as SecureStore from "expo-secure-store";

export default function useUserId() {
  return SecureStore.getItem("userId");
}
