import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux";
function UserContainer({ userData, fetchUsers }) {
  // dispatch the FETCH_USERS action using key fetchUsers created in mapDispatchToProps
  useEffect(() => {
    fetchUsers();
  });
  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>Users</h2>
      <div>
        {userData.users.map((user) => {
          return <p key={user.id}>{user.name}</p>;
        })}
      </div>
    </div>
  );
}
//step-1-defining mapStateToProps-this function gets the redux state as a parameter and returns an object with appropriate state properties
const mapStateToProps = (state) => {
  return {
    // we access the state using state.<rootreducer name>
    userData: state.user,
  };
};
//step 2-defining mapDispatchToProps this function gets the redux dispatch method as a parameter and returns an object which allows us to map action creators to props in our component
const mapDispatchToProps = (dispatch) => {
  return {
    //here we make the FETCH_USERS action request to
    //fetchUsers corresponds to the action creator we have defined
    // we create a property called fetchUsers and map dispatch function to an action creator from here
    //fetchUsers is the key which dispatches the FETCH_USERS action
    fetchUsers: () => dispatch(fetchUsers()),
  };
};
//step -3- connect two functions with our react component
// The connect() function connects a React component to a Redux store.
// -mapStateToProps--state from redux store is mapped to component props
//apart from whatever props the UserContainer was receiving it will now receive an additional prop called userData which will reflect the userData from the redux store where api request is made
//-mapDispatchToProps-- it will map our dispatch of an action creator to a prop in our component
//our component now receives a second additional prop called fetchUsers() which will basically dispatch the FETCH_USERS action, this allows us to specify within our componet onclick action to dispatch the buyCake
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
