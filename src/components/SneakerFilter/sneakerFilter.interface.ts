import { SetStateAction } from "react";

export interface IBrandItem {
  name: string;
  categoryNumber: number;
}

export interface IPriceItem {
  minPrice: number;
  maxPrice: number;
}
