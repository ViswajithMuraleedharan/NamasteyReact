import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
//creating a store
const appStore = configureStore({
  //passing the reducers as an object
  reducer: {
    cart: cartReducer,
  },
});
export default appStore;
