import { createSlice } from '@reduxjs/toolkit';
import { faqData } from '../../data/aboutUsData'; // Ensure this path is correct

const initialState = {
  faqData: faqData,  // Store your FAQ data in faqData
  activeFAQ: null,    // Initialize activeFAQ to null
};

const faqSlice = createSlice({
  name: 'faq',
  initialState,
  reducers: {
    setActiveFAQ: (state, action) => {
      state.activeFAQ = action.payload;
    },
  },
});

export const { setActiveFAQ } = faqSlice.actions;
export default faqSlice.reducer;
