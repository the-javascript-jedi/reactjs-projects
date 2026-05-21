import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/usersSlice";
import alertReducer from "../features/users/alertSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    alert: alertReducer,
  },
});
