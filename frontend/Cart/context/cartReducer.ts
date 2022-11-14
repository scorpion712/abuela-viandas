import { CartItem, CartState } from "../interfaces/cart.interfaces";
import { delOneItems, getAddedItems } from "./cart.actions";

type CartAction =
  | { type: "AddToCart"; payload: CartItem }
  | { type: "AddOneToCart"; payload: { id: number | string } }
  | { type: "DeleteFromCart"; payload: { id: number | string } }
  | { type: "RemoveFromCart"; payload: { id: number | string } }
  | { type: "ClearCart" };

export const cartReducer = (
  state: CartState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case "AddToCart":
      let items = state.cartItems ? getAddedItems(state.cartItems, action.payload) : [...state.cartItems, action.payload];
      return {
        ...state,
        cartItems: items,
      };
      break;
    case "AddOneToCart":
      return {
        ...state,
        cartItems: state.cartItems.map(({ ...cartItem }) => {
          if (cartItem.item.id === action.payload.id) {
            cartItem.itemQty++;
          }
          return cartItem;
        }),
      };
      break;
    case "DeleteFromCart": // delete 1 unit, remove if qty=0
      items = delOneItems(state.cartItems, action.payload.id);
      return {
        ...state,
        cartItems: items,
      };
      break;
    case "RemoveFromCart":
      items = state.cartItems.slice();
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.item.id !== action.payload.id
        ),
      };
      break;
    case "ClearCart":
      return {
        cartItems: [],
        deliver: false,
        customer: "",
      };
      break;
    default:
      return state;
  }
};
