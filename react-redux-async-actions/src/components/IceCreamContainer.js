import React from "react";
import { connect } from "react-redux";
// we import the buyIceCream action creator from the index.js
import { buyIceCream } from "../redux";

const IceCreamContainer = (props) => {
  return (
    <div>
      <h2>Number of Ice Creams - {props.numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy Ice Creams</button>
    </div>
  );
};
//step-1-defining mapStateToProps-this function gets the redux state as a parameter and returns an object with appropriate state properties
const mapStateToProps = (state) => {
  return {
    // we access the state using state.<rootreducer name>
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};
//step 2-defining mapDispatchToProps this function gets the redux dispatch method as a parameter and returns an object which allows us to map action  creators to props in our component
const mapDispatchToProps = (dispatch) => {
  return {
    // we create a property called buyIceCream and map dispatch function to an action creator from here
    buyIceCream: () => dispatch(buyIceCream()),
  };
};
//step -3- connect two functions with our react component
// The connect() function connects a React component to a Redux store.
// -mapStateToProps--state from redux store is mapped to component props
//apart from whatever props the IceCreamContainer was receiving it will now receive an additional prop called numOfIceCreams which will reflect the numOfIceCreams from the redux store
//-mapDispatchToProps-- it will map our dispatch of an action creator to a prop in our component
//our component now receives a second additional prop called buyIceCream() which will basically dispatch the buyIceCream action, this allows us to specify within our componet onclick action to dispatch the buyIceCream
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
