import React, { useState } from "react";

const MyComponent = () => {
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang",
  });
  const handleYearChange = (event) => {
    // { year: 2024,make: "Ford", model: "Mustang",year:2025}--only latest value is taken
    setCar((prevValue) => ({ ...prevValue, year: event.target.value }));
  };
  const handleMakeChange = (event) => {
    setCar((prevValue) => ({ ...prevValue, make: event.target.value }));
  };
  const handleModelChange = (event) => {
    setCar((prevValue) => ({ ...prevValue, model: event.target.value }));
  };
  return (
    <>
      <div>
        <p>
          Your Favourite Car is {car.year} {car.make} {car.model}
        </p>
        <input
          type="number"
          value={car.year}
          onChange={(e) => {
            handleYearChange(e);
          }}
        />
        <input
          type="text"
          value={car.make}
          onChange={(e) => {
            handleMakeChange(e);
          }}
        />
        <input
          type="text"
          value={car.model}
          onChange={(e) => {
            handleModelChange(e);
          }}
        />
      </div>
    </>
  );
};
export default MyComponent;
