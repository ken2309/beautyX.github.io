import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import orgReducer from "./orgSlice";
import servicesBookReducer from './servicesBookSlice';

const rootReducer = {
  carts: cartReducer,
  org: orgReducer,
  SERVICES_BOOK: servicesBookReducer
};
const store = configureStore({
  reducer: rootReducer,
});
export default store;
