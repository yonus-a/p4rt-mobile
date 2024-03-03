"use client";

import { useState } from "react";
import CartContext from "../../context/cartContext";

interface Props {
  children: React.ReactNode;
}

export default function CustomCartProvider({ children }: Props) {
  const [cart, setCart] = useState<any>([]);

  const getItems = () => {
    return cart;
  };

  const addItem = (item: any) => {
    setCart([...cart, item]);
  };

  const getItem = (id: any) => {
    return cart.filter((item: any) => item.id == id)[0];
  };

  const inCart = (id: any) => {
    return cart.some((item: any) => item.id == id);
  };

  const updateItemQuantity = (id: number, number: number) => {
    setCart(
      cart.map((item: any) => {
        if (item.id == id) {
          item.quantity = number;
          return item;
        } else {
          return item;
        }
      })
    );
  };

  const removeItem = (id: number) => {
    setCart(
      cart.filter((item: any) => {
        return item.id != id;
      })
    );
  };

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        updateItemQuantity,
        items: cart,
        removeItem,
        emptyCart,
        getItems,
        addItem,
        getItem,
        inCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
