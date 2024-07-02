export interface CartItem {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  count: number;
  image?: string;
}

export interface ICart {
  items: CartItem[];
  totalPrice: number;
  searchValue: string;
}
