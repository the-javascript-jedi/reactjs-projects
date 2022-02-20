import React from "react";
// import action
import { formAction } from "../features/formReducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function OtherInfo() {
  //step 5 - declare useDispatch hook to dispatch an action
  const dispatch = useDispatch();
  // Step 6 - useSelector to display state data
  //get the existing state from the useSelector
  const formRedux = useSelector((state) => state.form.value);
  return (
    <div className="other-info-container">
      <input
        type="text"
        placeholder="Nationality..."
        value={formRedux.nationality}
        onChange={(e) => {
          dispatch(formAction({ ...formRedux, nationality: e.target.value }));
        }}
      />
      <input
        type="text"
        placeholder="Other..."
        value={formRedux.other}
        onChange={(e) => {
          dispatch(formAction({ ...formRedux, other: e.target.value }));
        }}
      />
    </div>
  );
}

export default OtherInfo;
