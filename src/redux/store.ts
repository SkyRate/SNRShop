import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api";
import cartReducer from "./Cart/cart.slice";
import filtersReducer from "./Filters/filters.slice";
import carouselReducer from "../components/Carousel/carousel.slice";

const reducers = combineReducers({
  [api.reducerPath]: api.reducer,
  filters: filtersReducer,
  cart: cartReducer,
  carousel: carouselReducer,
});

export const store = configureStore({
  reducer: reducers,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
