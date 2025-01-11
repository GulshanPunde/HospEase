import { createSlice } from '@reduxjs/toolkit';
import departments from '../../data/departmentsData'; 

const departmentSlice = createSlice({
  name: 'departments',
  initialState: {
    departmentList: departments, // Preloaded data from departments.js
  },
  reducers: {
    updateBedStatus: (state, action) => {
      const { departmentName, occupiedBeds } = action.payload;
      const department = state.departmentList.find(
        (dept) => dept.name === departmentName
      );

      if (department) {
        department.occupiedBeds = occupiedBeds;
        department.availableBeds = department.totalBeds - occupiedBeds;
      }
    },
  },
});

export const { updateBedStatus } = departmentSlice.actions;
export default departmentSlice.reducer;
