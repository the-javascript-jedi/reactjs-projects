// createSlice - function allows us to create reducer in a easy way
import { createSlice } from "@reduxjs/toolkit";

// Initial state value
const initialStateValue = "";
//Step 3 - Declare the initial State
export const themeSlice = createSlice({
  name: "theme",
  // value property will contain actual initial state
  initialState: { value: initialStateValue },
  //Step 4 - Specify the actions to change the state
  reducers: {
    // @change color action function @//
    // state is the current and previous value state,
    // action(contains payload and type) - payload will contain info which we use to change the state
    changeColorAction: (state, action) => {
      //set state to the value we get from payload
      state.value = action.payload;
    },
  },
});
export const { changeColorAction } = themeSlice.actions;
export default themeSlice.reducer;
