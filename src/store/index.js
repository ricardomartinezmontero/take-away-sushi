import { configureStore } from "@reduxjs/toolkit";

import menuReducer from "./menu";
import orderReducer from "./order";

export default configureStore({
  reducer: {
    menu: menuReducer,
    order: orderReducer,
  },
});
