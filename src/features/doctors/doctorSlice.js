// features/doctorSlice.js
import { createSlice } from '@reduxjs/toolkit';
import doctorsData from '../../data/doctorsData';

const doctorSlice = createSlice({
  name: 'doctors',
  initialState: doctorsData,
  reducers: {}, // No reducers needed for static data
});

export default doctorSlice.reducer;
