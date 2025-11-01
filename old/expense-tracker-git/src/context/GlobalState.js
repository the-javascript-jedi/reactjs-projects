import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
// Initial State
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};
// Create Context
export const GlobalContext = createContext(initialState);
// Provider component
// we are wrapping elements inside provider to access those elements
//we are destructuring props as props.children
export const GlobalProvider = ({ children }) => {
  // when we need to use reducer we call the dispatch
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // functions
  // to use this function we must pass it down to the provider
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }
  return (
    // Provider provides state and action to components it is wrapped to
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {/* children will be all of our components which we wrap */}
      {children}
    </GlobalContext.Provider>
  );
};