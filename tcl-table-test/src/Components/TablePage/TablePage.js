import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listUsers, deleteUsers } from "../../redux/actions/userActions";
import "./TablePage.css";
const TablePage = () => {
  const [userData, setUserData] = useState([]);
  const [searchUsers, setSearchUsers] = useState("");
  const dispatchHook = useDispatch();
  const users = useSelector((state) => {
    console.log("state--TablePage", state.UserReducer.users);
    return state.UserReducer.users;
  });
  // useSelector will load the data
  useEffect(() => {
    console.log("users--useSelector", users);
    setUserData(users);
  }, [users]);
  // useDispatch hook and get the data
  useEffect(() => {
    console.log("dispatchHook", dispatchHook(listUsers()));
  }, []);
  // search filter
  const filterUsersByName = userData.filter((user) => {
    return user.nameOfUser.toLowerCase().includes(searchUsers.toLowerCase());
  });
  return (
    <div>
      <h3>User List</h3>
      <hr />
      {/* search */}
      <input
        type="text"
        value={searchUsers}
        onChange={(e) => {
          setSearchUsers(e.target.value);
        }}
        className="searchUser"
        placeholder={"search by name"}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Genders</th>
            <th>Hobbies</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userData &&
            filterUsersByName.map((user, index) => {
              return (
                <tr key={user.id}>
                  {/* <td>{user.id}</td> */}
                  <td>{user.nameOfUser}</td>
                  <td>{user.age}</td>
                  <td>{user.gender}</td>
                  <td>
                    {/* {JSON.stringify(user)} */}
                    {user.hobbies.map((hobby, index) => {
                      return <p key={index}>{hobby}</p>;
                    })}
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        dispatchHook(deleteUsers(user.id));
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default TablePage;
