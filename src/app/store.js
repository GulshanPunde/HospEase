import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product/product";
import cartReducer from "../features/cart/cartSlice";
import accountSlice from "../features/account/accountSlice";
import { Component } from "react";
const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    components: accountSlice,
  },
});
export default store;
