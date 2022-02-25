import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
      infoVerified: infoVerified,
    };
    // console.log("valuesToSubmit", valuesToSubmit);
    dispatchHook(addUser(valuesToSubmit));
  };
  return (
    <div>
      <h1>FormPage</h1>
      <div className="form-container">
        <form onSubmit={formSubmit}>
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
          <div
            className="form-input-group"
            onChange={(e) => {
              setGender(e.target.value);
            }}
          >
            <label htmlFor="genderMale">Male</label>
            <input type="radio" name="gender" value="male" />
            <label htmlFor="genderFemale">Female</label>
            <input type="radio" name="gender" value="female" />
          </div>
          <div className="form-input-group">
            <label htmlFor="infoVerified">
              All the information is verified
            </label>
            <input
              type="checkbox"
              name="infoVerified"
              // checked by default
              // defaultChecked={infoVerified}
              onChange={() => setInfoVerified(!infoVerified)}
            />
          </div>
          {/* Todo */}
          <div className="form-input-group">
            <label htmlFor="infoVerified">Hobbies</label>
          </div>
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
