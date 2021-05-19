import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import getVisibleExpenses from "../selectors/Expenses";
const ExpenseList = (props) => {
  return (
    <div>
      <h1>Expense List</h1>
      {props.expenses.map((expense) => {
        // we are spreading out all the properties on expense
        return <ExpenseListItem key={expense.id} {...expense} />;
      })}
    </div>
  );
};
const mapStateToProps = (state) => {
  // console.log("state", state);
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters),
  };
};
export default connect(mapStateToProps)(ExpenseList);