import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./FormPage.css";
// actions
import { addUser } from "../../redux/actions/userActions";
const FormPage = () => {
  // redux
  const dispatchHook = useDispatch();
  const users = useSelector((state) => {
    return state.UserReducer.users;
  });
  // state

  const [nameOfUser, setNameOfUser] = useState("");
  const [age, setAge] = useState(18);
  const [gender, setGender] = useState("");
  const [infoVerified, setInfoVerified] = useState(true);
  const [multipleTextBox, setMultipleTextBox] = useState({ hobbies: [""] });

  const addTextBox = (event) => {
    setMultipleTextBox({ hobbies: [...multipleTextBox.hobbies, " "] });
  };
  // Handle Textbox change event
  const handleDynamicChange = (e, index) => {
    multipleTextBox.hobbies[index] = e.target.value;
    // set the changed state
    setMultipleTextBox({ hobbies: multipleTextBox.hobbies });
  };
  // Delete textBox Field
  const handleRemoveTextbox = (index) => {
    // remove the item from index
    multipleTextBox.hobbies.splice(index, 1);
    console.log("handle remove", multipleTextBox.hobbies);
    // update the state
    setMultipleTextBox({ hobbies: multipleTextBox.hobbies });
  };

  // useEffect
  useEffect(() => {
    console.log("users", users);
  }, [users]);
  // form submit
  const formSubmit = (e) => {
    e.preventDefault();
    const valuesToSubmit = {
      id: Math.random().toString(),
      nameOfUser: nameOfUser,
      age: age,
      gender: gender,
      hobbies: multipleTextBox.hobbies,
      infoVerified: infoVerified,
    };
    // console.log("valuesToSubmit", valuesToSubmit);
    dispatchHook(addUser(valuesToSubmit));
  };
  return (
    <div>
      <h3>Add User Information</h3>
      <hr />

      <div className="form-page">
        <form onSubmit={formSubmit}>
          {/* Name */}
          <div className="form-input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={nameOfUser}
              onChange={(e) => {
                setNameOfUser(e.target.value);
              }}
            />
          </div>
          {/* Age */}
          <div className="form-input-group">
            <label htmlFor="age">Age</label>
            <select
              name="age"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
            >
              <option value={18}>18</option>
              <option value={19}>19</option>
              <option value={20}>20</option>
            </select>
          </div>
          {/* Gender */}
          <div
            className="form-input-group gender-container"
            onChange={(e) => {
              setGender(e.target.value);
            }}
          >
            <input type="radio" name="gender" value="male" />
            <label htmlFor="genderMale">Male</label>
            <input type="radio" name="gender" value="female" />
            <label htmlFor="genderFemale">Female</label>
          </div>
          {/* Checkbox */}
          <div className="form-input-group checkboxHolder">
            <input
              type="checkbox"
              name="infoVerified"
              // checked by default
              // defaultChecked={infoVerified}
              onChange={() => setInfoVerified(!infoVerified)}
            />
            <label htmlFor="infoVerified">
              All the information is verified
            </label>
          </div>
          {/* Hobbies - Dynamic Text Boxes */}
          <div>
            <div className="form-input-group">
              <label htmlFor="infoVerified">Hobbies</label>
            </div>
            <div className="hobbies custom">
              {multipleTextBox.hobbies.map((dateText, index) => {
                return (
                  <div className={"multipleTextBox"} key={index}>
                    {/* Input Box */}
                    <input
                      value={dateText}
                      onChange={(e) => {
                        handleDynamicChange(e, index);
                      }}
                    />
                    {/* Remove TextBox */}
                    {multipleTextBox.hobbies.length && (
                      <button
                        onClick={(e) => {
                          handleRemoveTextbox(index);
                        }}
                        disabled={multipleTextBox.hobbies.length === 1}
                      >
                        Remove
                      </button>
                    )}
                    {/* <p>{JSON.stringify(multipleTextBox.hobbies.length === 1)}</p> */}
                  </div>
                );
              })}
            </div>
            {/* Add TextBox */}
            <button
              type="button"
              onClick={(e) => {
                addTextBox(e);
              }}
              disabled={multipleTextBox.hobbies.length === 5}
            >
              Add Fields
            </button>
          </div>
          <p>{JSON.stringify(multipleTextBox)}</p>

          <div className="buttons-placeholder">
            <button type="submit">Add</button>
            <button type="button">Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
