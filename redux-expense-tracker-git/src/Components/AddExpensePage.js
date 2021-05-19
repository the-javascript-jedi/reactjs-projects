import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { addExpense } from "../actions/Expenses";
const AddExpensePage = (props) => {
  return (
    <div>
      <ExpenseForm
        onSubmit={(expense) => {
          console.log(expense);
          props.dispatch(addExpense(expense));
          // we can switch to other page using props.history.push
          props.history.push("/");
        }}
      />
    </div>
  );
};
// we have no need for the state and so we dont use mapStateToProps
// we can use the connect method and call props.dispatch()
export default connect()(AddExpensePage);