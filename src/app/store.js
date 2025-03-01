import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import accountSlice from "../features/account/accountSlice";
import doctorReducer from '../features/doctors/doctorSlice';
import departmentReducer from '../features/departments/deparmentSlice';
import testimonialsReducer from '../features/testimonials/testimonialsSlice'
import faqReducer from '../features/departments/faqSlice';
import servicesReducer from '../features/departments/servicesSlice'
import authReducer from "../features/auth/authSlice"
const store = configureStore({
  
  reducer: {
    cart: cartReducer,
    components: accountSlice,
    doctors: doctorReducer,
    departments: departmentReducer,
    testimonials: testimonialsReducer,
    faq: faqReducer,
    services: servicesReducer,
    auth: authReducer,
  },
});
export default store;
