// servicesSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { healthCareServices } from "../../data/servicesData"; 

const servicesSlice = createSlice({
  name: "services",
  initialState: {
    services: healthCareServices,
    activeService: null, // For highlighting or showing a selected service
  },
  reducers: {
    setActiveService: (state, action) => {
      state.activeService = action.payload; // Set the currently active service
    },
    clearActiveService: (state) => {
      state.activeService = null; // Clear the active service
    },
  },
});

export const { setActiveService, clearActiveService } = servicesSlice.actions;

export default servicesSlice.reducer;
