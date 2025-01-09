import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accountComponents: ["Login", "Profile", "Contact", "Setting", "Help"],
  selectedComponent: "Login",
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
});

export const {} = accountSlice.actions;
export default accountSlice.reducer;
