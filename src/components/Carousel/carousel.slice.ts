import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedItemIndex: 0,
};

export const carouselSlice = createSlice({
  name: "carousel",
  initialState,
  reducers: {
    nextSlide: (state, action: PayloadAction<{ carouselLength: number }>) => {
      if (state.selectedItemIndex !== action.payload.carouselLength - 1)
        state.selectedItemIndex += 1;
      else state.selectedItemIndex = 0;
    },
    prevSlide: (state) => {
      if (state.selectedItemIndex > 0) state.selectedItemIndex -= 1;
    },
    selectedSlide: (state, action: PayloadAction<number>) => {
      state.selectedItemIndex = action.payload;
    },
  },
});

export const { nextSlide, prevSlide, selectedSlide } = carouselSlice.actions;
export default carouselSlice.reducer;
