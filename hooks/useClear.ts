import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

export default function useClear(callback) {
  useFocusEffect(
    useCallback(() => {
      return callback;
    }, [])
  );
}
