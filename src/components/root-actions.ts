import { cartSlice } from "../redux/Cart/cart.slice";
import { filtersSlice } from "../redux/Filters/filters.slice";
import { carouselSlice } from "./Carousel/carousel.slice";

export const rootActions = {
  ...carouselSlice.actions,
  ...cartSlice.actions,
  ...filtersSlice.actions,
};
