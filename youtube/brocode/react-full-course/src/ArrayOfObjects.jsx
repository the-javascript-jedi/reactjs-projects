import React, { useState } from "react";

const MyComponent = () => {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar() {
    const newCar = {
      year: carYear,
      make: carMake,
      model: carModel,
    };
    // add object to array
    setCars((prevValue) => [...prevValue, newCar]);
    // reset the data
    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }
  function handleRemoveCar(index) {
    let updatedCars = cars.slice();
    // remove data from array
    updatedCars.splice(index, 1);
    setCars(updatedCars);
  }
  function handleYearChange(e) {
    setCarYear(e.target.value);
  }
  function handleMakeChange(e) {
    setCarMake(e.target.value);
  }
  function handleModelChange(e) {
    setCarModel(e.target.value);
  }

  return (
    <div>
      <h2>List of Car Objects</h2>
      <pre>debugger - {JSON.stringify(cars, null, 2)}</pre>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>
            {car.year} - {car.make} - {car.model}
            <button onClick={() => handleRemoveCar(index)}>Remove</button>
          </li>
        ))}
      </ul>
      {/* input box */}
      <input
        type="number"
        value={carYear}
        onChange={(e) => handleYearChange(e)}
      />
      <br />
      <input
        type="text"
        value={carMake}
        onChange={(e) => handleMakeChange(e)}
      />
      <br />
      <input
        type="text"
        value={carModel}
        onChange={(e) => handleModelChange(e)}
      />

      <br />
      <button onClick={() => handleAddCar()}>Add Car</button>
    </div>
  );
};
export default MyComponent;
