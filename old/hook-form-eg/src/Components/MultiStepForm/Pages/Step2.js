import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const Step2 = (props) => {
  const { handleSubmit } = useForm();
  const { push } = useHistory();
  const onSubmit = (data) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Step 2</h2>
      <label>
        Age:
        <input name="age" type="number" />
      </label>
      <label>
        Years of experience:
        <input name="yearsOfExp" type="number" />
      </label>
      <input type="submit" />
    </form>
  );
};

export default Step2;
