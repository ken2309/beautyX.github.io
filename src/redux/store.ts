import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import orgReducer from './orgSlice'

const rootReducer = {
      carts: cartReducer,
      org: orgReducer
}
const store = configureStore({
      reducer: rootReducer
});
export default store;