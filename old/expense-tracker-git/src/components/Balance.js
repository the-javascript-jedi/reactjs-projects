import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
const Balance = () => {
  const context = useContext(GlobalContext);
  // amounts will contain an array of all the amount
  const amounts = context.transactions.map((transaction) => {
    console.log("Balance,js-transaction.amount", transaction.amount);
    return transaction.amount;
  });
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <React.Fragment>
      <h4>Your Balance</h4>
      <h1 id="balance">${total}</h1>
    </React.Fragment>
  );
};
export default Balance;