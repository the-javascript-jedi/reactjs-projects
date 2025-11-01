import React from "react";
import "./Form.css";
import { useForm } from "react-hook-form";
const Form = () => {
  // react-hook-form
  // register - will register the input with the ref
  // handleSubmit - wrap the form with submit
  // errors object used to give feedback to user
  const { register, handleSubmit, errors } = useForm();
  // onSubmit
  const onSubmit = (data) => {
    console.log("data-onSubmit", data);
  };
  // sleep simulates an async call
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  // custom validation
  const validateUserName = async (value) => {
    await sleep(1000);
    if (value === "bill") {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className="Form">
      <div className="title"></div>
      <div className="inputs">
        <form className="App" onSubmit={handleSubmit(onSubmit)}>
          <h1>Sign Up</h1>
          <label>First Name:</label>
          <input
            name="firstName"
            ref={register({ required: true, minLength: 2 })}
            className={errors.firstName ? "errorBorder" : ""}
          />
          {/* Error Message Required */}
          {errors.firstName && errors.firstName.type === "required" && (
            <p>This is required</p>
          )}
          {/* Error Message Min Length */}
          {errors.firstName && errors.firstName.type === "minLength" && (
            <p>This field requires min length of 2</p>
          )}
          <label>Last Name:</label>
          <input name="lastName" ref={register({ required: true })} />
          {/* Error Message Required */}
          {errors.lastName && errors.lastName.type === "required" && (
            <p>This is required</p>
          )}
          <label>Gender</label>
          <select name="gender" ref={register({ required: true })}>
            <option value="">Select...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {/* Error Message Required */}
          {errors.gender && errors.gender.type === "required" && (
            <p>This is required</p>
          )}
          {/* using custom validation */}
          <label>Username</label>
          <input
            name="username"
            ref={register({ required: true, validate: validateUserName })}
          />
          {errors.username && <p>Username must be bill</p>}
          {/* Error Message Required */}
          {errors.username && errors.username.type === "required" && (
            <p>This is required</p>
          )}
          <label>Email</label>
          <input name="email" ref={register({ required: true })} />
          {errors.email && errors.email.type === "required" && (
            <p>This is required</p>
          )}
          <label>About you</label>
          <textarea name="aboutYou" ref={register({ required: true })} />
          {errors.aboutYou && errors.aboutYou.type === "required" && (
            <p>This is required</p>
          )}
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};
export default Form;
