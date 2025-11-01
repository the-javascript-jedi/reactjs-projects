// createSlice - function allows us to create reducer in a easy way
import { createSlice } from "@reduxjs/toolkit";
//Step 3 - Declare the initial State
// Initial state value
const initialStateValue = {
  email: "emailRedux",
  password: "passRedux",
  confirmPassword: "confirmRedux",
  firstName: "fNameRedux",
  lastName: "lNameRedux",
  username: "uNameRedux",
  nationality: "nation",
  other: "other",
};
//Step 3 - Declare the initial State
export const userSlice = createSlice({
  name: "form",
  // value property will contain actual initial state
  initialState: { value: initialStateValue },
  //Step 4 - Specify the actions to change the state
  reducers: {
    // @formAction function @//
    // state is the current and previous value state,
    // action(contains payload and type) - payload will contain info which
    // we use to change the state
    formAction: (state, action) => {
      //set state to the value we get from payload
      state.value = action.payload;
    },
  },
});
export const { formAction } = userSlice.actions;
export default userSlice.reducer;
