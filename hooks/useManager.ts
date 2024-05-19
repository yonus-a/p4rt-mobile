import useUserId from "./useUserId";

export default function useManager() {
  const userId = useUserId();
  return userId === "4060588326";
}
