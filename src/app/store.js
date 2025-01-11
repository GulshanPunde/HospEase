import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import accountSlice from "../features/account/accountSlice";
import doctorReducer from '../features/doctors/doctorSlice';
import departmentReducer from'../features/departments/deparmentSlice';
const store = configureStore({
  
  reducer: {
    cart: cartReducer,
    components: accountSlice,
    doctors: doctorReducer,
    departments: departmentReducer,
  },
});
export default store;
