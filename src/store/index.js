import { configureStore } from "@reduxjs/toolkit";

import menuReducer from "./menu";
import orderReducer from "./order";
import authReducer from './auth';

export default configureStore({
  reducer: {
    menu: menuReducer,
    order: orderReducer,
    auth: authReducer
  }
});
