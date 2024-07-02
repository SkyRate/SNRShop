import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFilterItem } from "./filter.interface";

const initialState: IFilterItem = {
  queryTerm: "",
  category: 0,
  page: 1,
  totalPage: 1,
  products: [],
  filterOpen: false,
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setQueryTerm: (state, action: PayloadAction<string>) => {
      state.queryTerm = action.payload;
    },
    setCategory: (state, action: PayloadAction<number>) => {
      state.category = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPage = action.payload;
      if (state.page > action.payload) {
        state.page = action.payload;
      }
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setOpenFilter: (state, action) => {
      state.filterOpen = action.payload;
    },
  },
});
export const {
  setQueryTerm,
  setCategory,
  setPage,
  setTotalPages,
  setProducts,
  setOpenFilter,
} = filtersSlice.actions;
export default filtersSlice.reducer;
