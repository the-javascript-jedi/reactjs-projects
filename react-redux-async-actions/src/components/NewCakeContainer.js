import React, { useState } from "react";
import { connect } from "react-redux";
// we import the buyCake action creator from the index.js
import { buyCake } from "../redux";

const NewCakeContainer = (props) => {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyCake(number)}>Buy {number} Cakes</button>
    </div>
  );
};
//step-1-defining mapStateToProps-this function gets the redux state as a parameter and returns an object with appropriate state properties
const mapStateToProps = (state) => {
  return {
    // we access the state using state.<rootreducer name>
    numOfCakes: state.cake.numOfCakes,
  };
};
//step 2-defining mapDispatchToProps this function gets the redux dispatch method as a parameter and returns an object which allows us to map action creators to props in our component
const mapDispatchToProps = (dispatch) => {
  return {
    //here we send the number of cakes to be bought as a argument to the buyCake action
    //buyCake corresponds to the action creator we have defined
    // we create a property called buyCake and map dispatch function to an action creator from here
    buyCake: (number) => dispatch(buyCake(number)),
  };
};
//step -3- connect two functions with our react component
// The connect() function connects a React component to a Redux store.
// -mapStateToProps--state from redux store is mapped to component props
//apart from whatever props the CakeContainer was receiving it will now receive an additional prop called numOfCakes which will reflect the numOfCakes from the redux store
//-mapDispatchToProps-- it will map our dispatch of an action creator to a prop in our component
//our component now receives a second additional prop called buyCake() which will basically dispatch the buyCake action, this allows us to specify within our componet onclick action to dispatch the buyCake
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
