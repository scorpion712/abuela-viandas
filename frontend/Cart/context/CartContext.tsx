import { createContext } from "react";
import { CartItem, CartState } from "../interfaces/cart.interfaces";

export type CartContextProps = {
    cartState: CartState;
    addToCart: (item: CartItem ) => void;
    addOneToCart: (id: number | string) => void;
    deleteFromCart: ( id: number | string) => void;
    removeFromCart: ( id: number | string) => void;
    clearCart: () => void;
} 

export const CartContext = createContext({} as CartContextProps);