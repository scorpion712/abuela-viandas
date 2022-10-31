import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const useCart = () => {
  const {
    cartState,
    addToCart,
    addOneToCart,
    deleteFromCart,
    removeFromCart,
    clearCart
  } = useContext(CartContext);

  const total: number = cartState.cartItems?.reduce(
    (total, item) => total + item.itemQty * item.item.unitPrice,
    0
  );

  return {
    cart: cartState,
    addToCart: addToCart,
    cartItems: cartState.cartItems,
    total: total,
    addOneToCart: addOneToCart,
    deleteFromCart: deleteFromCart,
    removeFromCart: removeFromCart,
    clearCart: clearCart,
  };
};
