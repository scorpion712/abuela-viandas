import { useReducer } from "react";
import { CartItem, CartState } from "../interfaces/cart.interfaces";
import { CartContext } from "./CartContext"; 
import { cartReducer } from "./cartReducer";

interface CartProviderProps {
    children: JSX.Element | JSX.Element []
}

const INITIAL_CART_STATE: CartState = {
    cartItems: [],
    deliver: false,
    customer: ''
};

export const CartProvider = ({children} : CartProviderProps) => {
    
    const [ cartState, dispatch] = useReducer(cartReducer, INITIAL_CART_STATE);

    const addToCart = (item: CartItem) => { 
        dispatch({type: 'AddToCart', payload: item});
    }
    
    const addOneToCart = (id: number | string) => {
        dispatch({type: 'AddOneToCart', payload: {id}});
    }

    const deleteFromCart = (id: number | string) => {
        dispatch({type: 'DeleteFromCart', payload: {id}});
    }

    const removeFromCart = (id: number | string) => {
        dispatch({type: 'RemoveFromCart', payload: {id}});
    }

    const clearCart = () => {
        dispatch({type: 'ClearCart'});
    }

    return (
    <CartContext.Provider value={{
        cartState,
        addToCart,
        addOneToCart,
        deleteFromCart,
        removeFromCart,
        clearCart
    }}>
        {children}
    </CartContext.Provider>
  )
}
