import React from "react";
// import action
import { formAction } from "../features/formReducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
function SignUpInfo() {
  //step 5 - declare useDispatch hook to dispatch an action
  const dispatch = useDispatch();
  // Step 6 - useSelector to display state data
  //get the existing state from the useSelector
  const formRedux = useSelector((state) => state.form.value);
  // console.log("form-redux", formRedux);
  return (
    <div className="sign-up-container">
      <input
        type="text"
        placeholder="Email..."
        value={formRedux.email}
        onChange={(event) => {
          dispatch(formAction({ ...formRedux, email: event.target.value }));
        }}
      />
      <input
        type="text"
        placeholder="Password..."
        value={formRedux.password}
        onChange={(event) => {
          dispatch(formAction({ ...formRedux, password: event.target.value }));
        }}
      />
      <input
        type="text"
        placeholder="Confirm Password..."
        value={formRedux.confirmPassword}
        onChange={(event) => {
          dispatch(
            formAction({
              ...formRedux,
              confirmPassword: event.target.value,
            })
          );
        }}
      />
    </div>
  );
}

export default SignUpInfo;
