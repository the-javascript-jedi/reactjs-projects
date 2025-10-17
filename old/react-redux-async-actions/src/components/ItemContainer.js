import React from "react";
// connect store with redux
import { connect } from "react-redux";
// import actions
import { buyCake, buyIceCream } from "../redux";
// display either no of cakes or no of ice creams based on a prop sent by parent component
function ItemContainer(props) {
  return (
    <div style={{ border: "1px solid red" }}>
      <h2>Item - {props.item} </h2>
      {/* buyItem prop is available in component thanks to connect function*/}
      <button onClick={props.buyItem}>
        Buy Items -- using mapStateToProps,mapDispatchToProps
      </button>
    </div>
  );
}
// mapStateToProps takes 2 parameters, 1st is redux state, 2nd is props of component itself, which is referred to as own props
//we are mapping state to component props, here are some props of the component which we can make use of
const mapStateToProps = (state, ownProps) => {
  // pass a prop called cake from parent component(App.js),
  //if props.cake is passed in through parent component(App.js) we access the state.cake.numOfCakes else we access state.iceCream.numOfIceCreams
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams;
  return {
    item: itemState,
  };
};
//mapDispatchToProps is a function which accepts 2 parameters, 1st parameter is dispatch, 2nd is ownProps
//within function body we can conditionally dispatch based on the prop passed from parent component(App.js)
//if props.cake is passed in through parent component(App.js) then dispatch buyCake else dispatch buyIceCream
const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());
  //return an object buyItem whoose value is dispatchFunction
  return {
    buyItem: dispatchFunction,
  };
};
// The connect() function connects a React component to a Redux store.
//export mapStateToProps, mapDispatchToProps to connect
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
