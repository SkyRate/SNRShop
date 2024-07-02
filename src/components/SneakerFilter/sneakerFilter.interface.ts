export interface IBrandItem {
  name: string;
  categoryNumber: number;
}

export interface IPriceItem {
  minPrice: number | undefined;
  maxPrice: number | undefined;
  setMinPrice: any;
  setMaxPrice: any;
}
