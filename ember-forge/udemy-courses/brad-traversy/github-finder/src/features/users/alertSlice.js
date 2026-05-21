import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  msg: "",
  type: "",
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAlert: (state, action) => action.payload,
    removeAlert: () => null,
  },
});

export const { setAlert, removeAlert } = alertSlice.actions;
export default alertSlice.reducer;
