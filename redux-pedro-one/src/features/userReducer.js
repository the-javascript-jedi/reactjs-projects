// createSlice - function allows us to create reducer in a easy way
import { createSlice } from "@reduxjs/toolkit";

// Initial state value
const initialStateValue = { name: "", age: 0, email: "" };

export const userSlice = createSlice({
  name: "user",
  // value property will contain actual initial state
  initialState: { value: initialStateValue },
  reducers: {
    // @login action function @//
    // state is the current and previous value state,
    // action(contains payload and type) - payload will contain info which we use to change the state
    loginAction: (state, action) => {
      //set state to the value we get from payload
      state.value = action.payload;
    },
    // @logout action function @//
    logOutAction: (state, action) => {
      state.value = initialStateValue;
    },
  },
});
export const { loginAction, logOutAction } = userSlice.actions;
export default userSlice.reducer;
