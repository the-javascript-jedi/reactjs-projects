import React from "react";

// click event with params
const handleClick = (name) => console.log(`OUCH! ${name}`);
let count = 0;

// click counter
const clickCounter = (name) => {
  if (count < 3) {
    count++;
    console.log(`You clicked me ${count} times`);
  } else {
    console.log(`${name} stop clicking me`);
  }
};

// change text of the clicked button
const changeText = (e) => {
  console.log("e", e);
  e.target.textContent = "OUCH!!!";
};

const Button = () => {
  return (
    <>
      {/* simple button */}
      <button onClick={() => handleClick("Bro")}>Cick Me</button>;
      {/* button click counter */}
      <button
        onClick={() => {
          clickCounter("Broo");
        }}
      >
        Click Counter
      </button>
      {/* on click change button text */}
      <button
        onClick={(e) => {
          changeText(e);
        }}
      >
        ChangeText
      </button>
    </>
  );
};
export default Button;
