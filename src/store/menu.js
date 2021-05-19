import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  idle: false,
  menu: [],
};

const menuSlice = createSlice({
  name: "menu",
  initialState: initialState,
  reducers: {
    setMenu: (state, action) => {
      state.menu = action.payload;
      state.idle = false;
    },
    fetchMenuStart: (state) => {
      state.idle = true;
    },
  },
});

export const { setMenu, fetchMenuStart } = menuSlice.actions;

export default menuSlice.reducer;
