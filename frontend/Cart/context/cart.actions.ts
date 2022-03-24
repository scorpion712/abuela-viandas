import { CartItem } from "../interfaces/cart.interfaces";

export const getAddedItems = (
  items: CartItem[],
  cItem: CartItem
): CartItem[] => {
  let exists = false;
  console.log('tengo',items);
  items.forEach((cartItem: CartItem) => {
    if (cartItem.item.id === cItem.item.id) {
      cartItem.itemQty += cItem.itemQty;
      exists = true;
    }
  }); 
  if (!exists) {
    items.push(cItem);
  }
  console.log(!exists?'agregue': 'no add', items);
  return items;
};

export const delOneItems = (
  items: CartItem[],
  id: number | string
): CartItem[] => {
  let remove = false;
  items.forEach((cartItem: CartItem) => {
    if (cartItem.item.id === id) {
      cartItem.itemQty--;
      remove = cartItem.itemQty <= 0;
    }
  });
  if (remove) {
    items = items.filter((item: CartItem) => item.item.id !== id);
  }
  console.log('elimine', items);
  return items;
};
