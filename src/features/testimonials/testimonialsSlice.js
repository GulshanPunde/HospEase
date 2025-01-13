import { createSlice } from '@reduxjs/toolkit';
import testimonials from '../../data/testimonials'; // Assuming testimonials is the default export of the file

const initialState = testimonials; // Assigning the imported testimonials as the initial state

const testimonialsSlice = createSlice({
  name: "testimonials",
  initialState, // Using the defined initialState
  reducers: {
    addTestimonial: (state, action) => {
      state.push(action.payload); // Add a new testimonial
    },
    removeTestimonial: (state, action) => {
      return state.filter((_, index) => index !== action.payload); // Remove testimonial by index
    },
    updateTestimonial: (state, action) => {
      const { index, updatedData } = action.payload;
      state[index] = { ...state[index], ...updatedData }; // Update a specific testimonial
    },
  },
});

export const { addTestimonial, removeTestimonial, updateTestimonial } = testimonialsSlice.actions;

export default testimonialsSlice.reducer;
