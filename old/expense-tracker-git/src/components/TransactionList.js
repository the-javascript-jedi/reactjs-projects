import React, { useContext } from "react";
// to pull in the global state we need to import global context
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";
const TransactionList = () => {
  // using the useContext hook we can pull out data
  const context = useContext(GlobalContext);
  // using destructuring we can take the transactions from the context
  // const {transactions} = useContext(GlobalContext);
  console.log("context", context);
  return (
    <React.Fragment>
      <h3>History</h3>
      <ul className="list">
        {context.transactions.map((transaction) => (
          <Transaction key={transaction.id} transactionProp={transaction} />
        ))}
      </ul>
    </React.Fragment>
  );
};
export default TransactionList;