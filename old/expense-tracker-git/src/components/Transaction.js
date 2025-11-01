import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
const Transaction = (props) => {
  // get the deleteTransaction defined in the GlobalState
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = props.transactionProp.amount < 0 ? "-" : "+";
  return (
    // the class name is dynamic because for minus class shows red border and vice versa
    <li className={props.transactionProp.amount < 0 ? "minus" : "plus"}>
      {props.transactionProp.text}{" "}
      <span>
        {sign}${Math.abs(props.transactionProp.amount)}
      </span>{" "}
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(props.transactionProp.id)}
      >
        X
      </button>
    </li>
  );
};
export default Transaction;