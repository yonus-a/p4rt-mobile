import errorAlert from "../utils/alert/error";
import { useEffect, useState } from "react";
import useUserId from "./useUserId";
import axios from "axios";

export default function useAdmin() {
  const userId = useUserId();
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        if (userId) {
          const { data } = await axios("/role/isAdmin", {
            params: { userId },
          });

          setAdmin(data.isAdmin);
        }
      } catch (e) {
        await errorAlert();
      }
    })();
  }, [userId, admin]);

  return admin;
}
