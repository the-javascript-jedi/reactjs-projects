import React from "react";
import { formAction } from "../features/formReducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
function PersonalInfo() {
  //step 5 - declare useDispatch hook to dispatch an action
  const dispatch = useDispatch();
  // Step 6 - useSelector to display state data
  //get the existing state from the useSelector
  const formRedux = useSelector((state) => state.form.value);
  return (
    <div className="personal-info-container">
      <input
        type="text"
        placeholder="First Name..."
        value={formRedux.firstName}
        onChange={(e) => {
          dispatch(formAction({ ...formRedux, firstName: e.target.value }));
        }}
      />
      <input
        type="text"
        placeholder="Last Name..."
        value={formRedux.lastName}
        onChange={(e) => {
          dispatch(formAction({ ...formRedux, lastName: e.target.value }));
        }}
      />
      <input
        type="text"
        placeholder="Username..."
        value={formRedux.username}
        onChange={(e) => {
          dispatch(formAction({ ...formRedux, username: e.target.value }));
        }}
      />
    </div>
  );
}
export default PersonalInfo;
