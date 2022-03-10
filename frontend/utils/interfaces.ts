
export interface Menu { 
    price: number;
    last_date: string;
    name: string;
    id: string;
    category: string;
    img: string;
}


export interface MenuHeadCell {
    disablePadding: boolean;
    id: keyof Menu;
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
  