
export interface Menu { 
    price: number;
    last_date: string;
    name: string;
    id: string;
    img: string;
}


export interface MenuHeadCell {
    disablePadding: boolean;
    id: keyof Menu;
    label: string;
    numeric: boolean;
  }
  