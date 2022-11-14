interface Item { 
    id: number | string;
    name: string;
    unitPrice: number;
    image: string;
    description: string;
}

export interface CartItem {
    itemId: number | string;
    item: Item;
    itemQty: number;
    note: string;
    subTotal: number;
}

export interface CartState {
    cartItems: CartItem[];
    deliver: boolean;
    customer: string;
}