import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFormData } from "../redux/actions/formActions";

const Step1 = (props) => {
  const { handleSubmit, errors } = useForm();
  const { push } = useHistory();
  // redux dispatch hook
  const dispatchHook = useDispatch();
  const onSubmit = (data) => {
    console.log("onSubmit clicked");
    const NewData = {
      firstName: "first updated",
      lastName: "last updated",
      age: "age updated",
      yearsOfExperience: "6 updated",
    };
    dispatchHook(addFormData(NewData));
  };
  const allFormData = useSelector((state) => {
    return state.formList.formData;
  });
  console.log("allFormData", allFormData);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Step 1</h2>
      <label>
        First Name:
        <input name="firstName" />
      </label>
      <label>
        Last Name:
        <input name="lastName" />
      </label>
      <input type="submit" />
    </form>
  );
};

export default Step1;
