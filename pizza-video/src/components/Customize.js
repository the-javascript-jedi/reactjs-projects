import React from "react";
import Cheese from "../assets/BaseCheese.png";
import Base from "../assets/PizzaBase.png";
import Olive from "../assets/Olive.png";
import Pineapple from "../assets/Pineapple.png";
import Mushroom from "../assets/Mushroom.png";
import Basil from "../assets/Basil.png";
import Tomato from "../assets/Tomato.png";
import { motion } from "framer-motion";

const Customize = ({ ingredients, setIngredients }) => {
  const onChange = (event, name) => {
    //make deep copy and not mutate the state
    let newIngredients = JSON.parse(JSON.stringify(ingredients));
    //Toggle the name of the ingredient
    newIngredients[name] = !newIngredients[name];
    setIngredients(newIngredients);
  };
  return (
    <div style={{ display: "flex" }}>
      <div className={"jsonColor"}>{JSON.stringify(ingredients)}</div>
      <div style={{ border: "2px solid black", flex: 1 }}>
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
            className="ingredients z4"
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
      <div style={{ border: "2px solid black", flex: 1 }}>
        {/* Basil */}
        <label class="container-checkbox">
          Basil
          <input
            type="checkbox"
            checked={ingredients["basil"]}
            onChange={(event) => onChange(event.currentTarget.checked, "basil")}
          />
          <span class="checkmark"></span>
        </label>
        {/* Cheese */}
        <label class="container-checkbox">
          Cheese
          <input
            type="checkbox"
            checked={ingredients["cheese"]}
            onChange={(event) =>
              onChange(event.currentTarget.checked, "cheese")
            }
          />
          <span class="checkmark"></span>
        </label>
        {/* Mushroom */}
        <label class="container-checkbox">
          Mushroom
          <input
            type="checkbox"
            checked={ingredients["mushroom"]}
            onChange={(event) =>
              onChange(event.currentTarget.checked, "mushroom")
            }
          />
          <span class="checkmark"></span>
        </label>
        {/* Mushroom */}
        <label class="container-checkbox">
          Olive
          <input
            type="checkbox"
            checked={ingredients["olive"]}
            onChange={(event) => onChange(event.currentTarget.checked, "olive")}
          />
          <span class="checkmark"></span>
        </label>
        {/* Pineapple */}
        <label class="container-checkbox">
          Pineapple
          <input
            type="checkbox"
            checked={ingredients["pineapple"]}
            onChange={(event) =>
              onChange(event.currentTarget.checked, "pineapple")
            }
          />
          <span class="checkmark"></span>
        </label>
        {/* Tomato */}
        <label class="container-checkbox">
          Tomato
          <input
            type="checkbox"
            checked={ingredients["tomato"]}
            onChange={(event) =>
              onChange(event.currentTarget.checked, "tomato")
            }
          />
          <span class="checkmark"></span>
        </label>
      </div>
    </div>
  );
};

export default Customize;
