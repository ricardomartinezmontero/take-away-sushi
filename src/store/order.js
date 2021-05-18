import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: {},
};

const order = createSlice({
  name: "order",
  initialState: initialState,
  reducers: {
    updateOrder: (state, action) => {
      const item = {
        ...action.payload.item,
        amount: action.payload.amount,
      };

      const orderUpdated = {
        ...state.order,
        [item.name]: item
      };

      if (item.amount === 0) {
        delete orderUpdated[item.name];
      }
      
      state.order = orderUpdated;
    },
  },
});

export const { updateOrder } = order.actions;

export default order.reducer;
