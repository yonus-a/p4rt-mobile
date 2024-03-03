import cartContext from "../context/cartContext";
import { useContext } from "react";

export default function useCart() {
  const cart: any = useContext(cartContext);
  return cart;
}
