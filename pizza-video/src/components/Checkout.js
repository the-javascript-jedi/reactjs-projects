import React, { useState } from "react";
import { useHistory } from "react-router";
import Pizzaman from "../assets/PizzaMan.png";

const Checkout = ({ ingredients }) => {
  // state
  const [success, setSuccess] = useState(false);
  const history = useHistory();
  console.log(Object.keys(ingredients));
  console.log(Object.values(ingredients));
  // var ObjectValues = Object.values(ingredients).map((ingredient, index) => {
  //   console.log("ingredient" + index, ingredient.toString());
  //   //convert boolean to string to display in window
  //   return <p>{ingredient.toString()}</p>;
  // });
  return (
    <div className="displayPizzaContainer">
      <div className={"jsonColor"}>{JSON.stringify(ingredients)}</div>
      <div>
        <div>
          <h1>My Ingredients</h1>
          {Object.keys(ingredients).map((ingredient, index) => {
            return (
              // display if the ingredient value is true
              ingredients[ingredient] && (
                <p key={index}>
                  {/*return the text in capital case */}
                  {ingredient[0].toUpperCase()}
                  {ingredient.substr(1)}
                </p>
              )
            );
          })}
          <hr />
          <button
            className="proceedToCheckout"
            onClick={() => setSuccess(true)}
          >
            Confirm
          </button>
          <button
            className="proceedToCheckout"
            onClick={() => history.push("/")}
          >
            Go Back
          </button>
        </div>
      </div>
      {/* Success */}
      {success && (
        <div style={{ textAlign: "center" }}>
          <img src={Pizzaman} alt="Pizzaman" height="300px" />
          <div style={{ fontFamily: "Open Sans Condensed", fontSize: "3rem" }}>
            We have received your order, Thank You
          </div>
          <div style={{ fontFamily: "Comfortaa", fontSize: "3rem" }}>
            Order #{Math.round(Math.random() * 100000)}
          </div>
          <div style={{ fontFamily: "Indie Flower", fontSize: "2rem" }}>
            Will be ready in 20-30 mins
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
