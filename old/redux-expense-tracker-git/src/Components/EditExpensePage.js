import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense } from "../actions/Expenses";
const EditExpensePage = (props) => {
  console.log("props-edit-expense", props.singleExpense);
  console.log("props.singleExpense.id", props.singleExpense.id);
  const singleExpense = props.singleExpense;
  return (
    <div>
      <ExpenseForm
        singleExpense={singleExpense}
        onSubmit={(expense) => {
          console.log("expenseFromChild", expense);
          console.log("expense.description", expense.description);
          // dispatch action to edit the expense
          props.dispatch(editExpense(props.singleExpense.id, expense));
          props.history.push("/");
        }}
      />
    </div>
  );
};
const mapStateToProps = (state, props) => {
  return {
    singleExpense: state.expenses.find(
      (expense) => expense.id === props.match.params.id
    ),
  };
};
export default connect(mapStateToProps)(EditExpensePage);