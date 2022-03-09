
export interface Menu { 
    price: number;
    last_date: string;
    name: string;
    id: string;
    category: string;
    img: string;
}
  
export interface HeadCell {
    id: string;
    disablePadding: boolean;
    label: string;
    numeric: boolean;
  }

export interface Food {
    id: string;
    mainImage: string;
    name: string;
    description: string;
    longDescriptionTitle?: string;
    longDescription?: string;
    price: number;
    dayOfWeek: Date;
  }
  
export interface Customer {
    id: string,
    email: string,
    name: string
}

export interface OrderLine {
    id: string, 
    itemQty: number,
    item: Menu
    itemUnitPrice: number,
    subTotal: number
}

export interface Order{
    id: string;
    total: number;
    customer: string;
    date: Date;
    deliveryDate: Date;
}