import React, { useState, useEffect } from "react";

const HoverBox = () => {
  // useEffect for displaying state in console.log
  useEffect(() => {
    console.log("useEffect--dateTextBox", dateTextBox);
  });
  //state values
  const [dateTextBox, setDateTextBox] = useState({ dates: [0, 1, 2, 3] });
  const [isHovering, setIsHovering] = useState(-1);

  const addCountry = (event) => {
    setDateTextBox({ dates: [...dateTextBox.dates, ""] });
  };
  // Handle Textbox change event
  const handleChange = (e, index) => {
    dateTextBox.dates[index] = e.target.value;
    // set the changed state
    setDateTextBox({ dates: dateTextBox.dates });
  };
  // Delete textBox Field
  const handleRemove = (index) => {
    // remove the item from index
    dateTextBox.dates.splice(index, 1);
    console.log("handle remove", dateTextBox.dates);
    // update the state
    setDateTextBox({ dates: dateTextBox.dates });
  };
  // Handle Submit event
  const handleSubmit = (e) => {
    console.log("handleSubmit--dateTextBox.dates", dateTextBox.dates);
  };
  return (
    <div>
      {dateTextBox.dates.map((dateText, index) => {
        return (
          <div key={index}>
            {/* Input Box */}
            {/* isHovering - onMouseEnter - we set the textbox id, onMouseLeave we set isHovering to -1 */}
            {isHovering === index ? (
              <input
                value={dateText}
                onChange={(e) => {
                  handleChange(e, index);
                }}
                onMouseEnter={() => setIsHovering(index)}
                onMouseLeave={() => setIsHovering(-1)}
              />
            ) : (
              <label
                onMouseEnter={() => setIsHovering(index)}
                onMouseLeave={() => setIsHovering(-1)}
              >
                {dateText}
              </label>
            )}
            {/* Remove TextBox */}
            <button
              onClick={(e) => {
                handleRemove(index);
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
      <hr />
      {/* Add TextBox */}
      <button
        onClick={(e) => {
          addCountry(e);
        }}
      >
        Add Fields
      </button>
      <hr />
      {/* Submit TextBox Form elements*/}
      <button
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        Submit
      </button>
    </div>
  );
};
export default HoverBox;
