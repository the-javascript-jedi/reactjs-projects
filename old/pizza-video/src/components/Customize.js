import React, { useState, useEffect } from "react";
import Cheese from "../assets/BaseCheese.png";
import Base from "../assets/PizzaBase.png";
import Olive from "../assets/Olive.png";
import Pineapple from "../assets/Pineapple.png";
import Mushroom from "../assets/Mushroom.png";
import Basil from "../assets/Basil.png";
import Tomato from "../assets/Tomato.png";
import { motion } from "framer-motion";
import { useHistory } from "react-router";

const Customize = ({ ingredients, setIngredients }) => {
  // useHistory
  let history = useHistory();
  //state
  //set true if all checkboxes are true
  const [checkBoxChecked, setCheckBoxChecked] = useState(false);
  //Checkbox change
  const onChange = (event, name) => {
    //make deep copy and not mutate the state
    let newIngredients = JSON.parse(JSON.stringify(ingredients));
    //Toggle the name of the ingredient
    newIngredients[name] = !newIngredients[name];
    setIngredients(newIngredients);
    // save to local storage
    localStorage.setItem("ingredients", JSON.stringify(newIngredients));
    console.log("localStorage", localStorage);
  };
  useEffect(() => {
    //we check if every value in array is false
    //if all values in array are false we get true returned
    var checkArrayForFalse = Object.values(ingredients).every(
      (ingredient) => ingredient === false
    );
    console.log("checkArrayForFalse", checkArrayForFalse);
    if (checkArrayForFalse) {
      setCheckBoxChecked(true);
    } else {
      setCheckBoxChecked(false);
    }
  }, [ingredients]);
  return (
    <div className="displayPizzaContainer">
      <div className={"jsonColor"}>{JSON.stringify(ingredients)}</div>
      <div className="pizzaHolder">
        <div
          style={{ maxHeight: "500", maxWidth: "500", position: "relative" }}
        >
          {/* Cheese */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients["cheese"] ? 100 : -100,
              opacity: ingredients["cheese"] ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
            className="ingredients"
          >
            <img src={Cheese} alt="Cheese" height="100%" width="100%" />
          </motion.div>
          {/* Basil */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients["basil"] ? 100 : -100,
              opacity: ingredients["basil"] ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
            className="ingredients"
          >
            <img src={Basil} alt="Pizza Base" height="100%" width="100%" />
          </motion.div>
          {/* Pineapple */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients["pineapple"] ? 100 : -100,
              opacity: ingredients["pineapple"] ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
            className="ingredients z4"
          >
            <img src={Pineapple} alt="Pizza Base" height="100%" width="100%" />
          </motion.div>
          {/* Mushroom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients["mushroom"] ? 100 : -100,
              opacity: ingredients["mushroom"] ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
            className="ingredients"
          >
            <img src={Mushroom} alt="Mushroom" height="100%" width="100%" />
          </motion.div>
          {/* Tomato */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients["tomato"] ? 100 : -100,
              opacity: ingredients["tomato"] ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
            className="ingredients"
          >
            <img src={Tomato} alt="Tomato" height="100%" width="100%" />
          </motion.div>
          {/* Olive */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients["olive"] ? 100 : -100,
              opacity: ingredients["olive"] ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
            className="ingredients"
          >
            <img src={Olive} alt="Olive" height="100%" width="100%" />
          </motion.div>
          {/* Base */}
          <img src={Base} alt="Pizza Base" height="100%" width="100%" />
        </div>
      </div>
      <div className="pizzaOptions">
        {/* Basil */}
        <label className="container-checkbox">
          Basil
          <input
            type="checkbox"
            checked={ingredients["basil"]}
            onChange={(event) => onChange(event.currentTarget.checked, "basil")}
          />
          <span className="checkmark"></span>
        </label>
        {/* Cheese */}
        <label className="container-checkbox">
          Cheese
          <input
            type="checkbox"
            checked={ingredients["cheese"]}
            onChange={(event) =>
              onChange(event.currentTarget.checked, "cheese")
            }
          />
          <span className="checkmark"></span>
        </label>
        {/* Mushroom */}
        <label className="container-checkbox">
          Mushroom
          <input
            type="checkbox"
            checked={ingredients["mushroom"]}
            onChange={(event) =>
              onChange(event.currentTarget.checked, "mushroom")
            }
          />
          <span className="checkmark"></span>
        </label>
        {/* Mushroom */}
        <label className="container-checkbox">
          Olive
          <input
            type="checkbox"
            checked={ingredients["olive"]}
            onChange={(event) => onChange(event.currentTarget.checked, "olive")}
          />
          <span className="checkmark"></span>
        </label>
        {/* Pineapple */}
        <label className="container-checkbox">
          Pineapple
          <input
            type="checkbox"
            checked={ingredients["pineapple"]}
            onChange={(event) =>
              onChange(event.currentTarget.checked, "pineapple")
            }
          />
          <span className="checkmark"></span>
        </label>
        {/* Tomato */}
        <label className="container-checkbox">
          Tomato
          <input
            type="checkbox"
            checked={ingredients["tomato"]}
            onChange={(event) =>
              onChange(event.currentTarget.checked, "tomato")
            }
          />
          <span className="checkmark"></span>
        </label>
        <button
          onClick={() => history.push("/checkout")}
          className="proceedToCheckout"
          disabled={checkBoxChecked}
        >
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default Customize;
