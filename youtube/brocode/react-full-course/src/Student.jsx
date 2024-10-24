import React from "react";
import PropTypes from "prop-types";

const Student = (props) => {
  console.log("props", props);
  return (
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
};
// prop types
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};
// default prop types
Student.defaultProps = {
  name: "Guest",
  age: 0,
};
export default Student;
