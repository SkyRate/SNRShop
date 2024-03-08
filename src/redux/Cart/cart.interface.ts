export interface ICart {
  items: ICartItems[];
  totalPrice: number;
  searchValue: string;
}
export interface ICartItems {
  id: number;
  image: string;
  title: string;
  price: number;
  category: string;
  count: number;
}
